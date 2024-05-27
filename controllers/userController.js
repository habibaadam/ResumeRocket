const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');


const generateToken = (userId) => {
  const payload = { id: userId };
  dotenv.config();
  const secret = process.env.JWT_SK;
  const options = {
    expiresIn: '24h',
  };
  return jwt.sign(payload, secret, options);
}

exports.createNew  = async function createNew(req, res) {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({message: 'No user found'});
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({message: 'Email already exists'})
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    const savedUser = await newUser.save();
    const token = generateToken(savedUser._id);
    // store cookie in httponly
    res.cookie('jwt', token, { httpOnly: true, secure: true });
    return res.status(200).json({
      message: 'Sucessfully signed up!',
      first_name: savedUser.firstName,
      last_name: savedUser.lastName,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Internal Server Error'});
  }
}

exports.forLogin = async function forLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({message: 'No user found'});
  }

  const existingUser = await User.findOne({email});
  if (!existingUser) {
    return res.status(400).json({message: 'You need to sign up'});
  }

  // console.log(password);
  // console.log(existingUser.password);
  const isValidPw = await bcrypt.compare(password, existingUser.password);
  if (!isValidPw) {
    return res.status(400).json({message: 'Invalid password'});
  }
  const token = generateToken(existingUser._id);
  res.cookie('jwt', token, { httpOnly: true, secure: true});
  return res.send('Logged in sucessfully!');
}

// TO-DO: Test this with front-end
exports.forLogout = async function forLogout(req, res) {
  // const jwt = req.cookies.jwt;
  res.clearCookie('jwt');
  return res.send('Logged out sucessfully!');
}


exports.getUser = async function getUser(req, res) {
  const user = await User.findOne({_id: req.params.id});
  if (!user) {
    return res.status(404).json({message: 'No user found'});
  }
  return res.status(200).json({
    message: 'User details retrieved',
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
  })
}
