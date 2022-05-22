/**
 * helps to connect to our mongoDB database and create a connection object called db that we can use to interact with the database (insert, update, delete, find) using the mongoose library
 * mongoose is a JavaScript library for working with MongoDB. It is a full-fledged Object Document Mapper tool for mapping between JavaScript objects and documents in MongoDB.
 */
import mongoose from 'mongoose';
/**
 * Import the config object from the config file to use the confi object to connect to the database by using the dot notation.
 */
import config from '../config/config.js';
/**
 * .connect() is a method that is used to connect to a MongoDB database.  
 * It takes one argument, the connection string.  
 * The connection string is a string that contains the connection information for the database.  
 * For security reasons, the connection string should not be stored in a file.  Instead, it should be stored in an environment variable in the .env file.
 */
const connectDB = async () => {
  try {
    return await mongoose.connect(config.db.URI);
  } catch (err) {
    console.error();
    console.log('Failed to connect to MongoDB', err.message);
  }
};

export default connectDB;