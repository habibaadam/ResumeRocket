const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User'); // Ensure the path to the User model is correct

dotenv.config();

class DBClient {
  constructor() {
    const username = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    this.database = 'resume_rocket';

    this.con = `mongodb+srv://${username}:${password}@cvrocket.e9mvlxq.mongodb.net/${this.database}?retryWrites=true&w=majority&appName=CVROCKET`;
  }

  connect = async() => {
    await mongoose.connect(this.con)
    .then(() => {
      console.log('Connected to Atlas Db');
      console.log('Connection details:');
      console.log('Ready state:', mongoose.connection.readyState);
      console.log('Host:', mongoose.connection.host);
      console.log('Port:', mongoose.connection.port);
      console.log('User:', mongoose.connection.user);
      console.log('Database Name:', mongoose.connection.name);
    })
    .catch((err) => console.error('Database connection error', err));
  }

}

const datab = new DBClient();

const createUser = async () => {
  await datab.connect(); // Ensure connection before performing operations

  const newUser = new User({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'johnDoe123',
  });

  try {
    // Save new user to the db
    await newUser.save();
    console.log('User saved successfully', newUser);
  } catch (err) {
    console.error('Error saving user', err);
  } finally {
    await datab.disconnect(); // Ensure disconnection after operations
  }
};

createUser();

module.exports = datab;

