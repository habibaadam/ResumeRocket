const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

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
    return res.status(400).json({message: 'Unauthorized'});
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
    console.log('Generated JWT token:', token);
    return res.status(200).json({
      message: 'Sucessfully signed up!',
      first_name: savedUser.firstName,
      last_name: savedUser.lastName,
      time_created: savedUser.timestamps,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Internal Server Error'});
  }
}
