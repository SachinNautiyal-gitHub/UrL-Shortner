

const mongoose = require('mongoose');

require('dotenv').config();
const MongoURI = process.env.DB_KEY;

const connectToMongo = async () => {
    try {
      await mongoose.connect(MongoURI);
  
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Failed to connect to MongoDB Campus', error);
    }
  };

module.exports = connectToMongo;
