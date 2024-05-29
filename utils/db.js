const mongoose = require('mongoose');
const dotenv = require('dotenv');

class DBClient {
  constructor() {
    dotenv.config();
    const username = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    // console.log(username);
    // console.log(password);
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
datab.connect();

module.exports = datab;
