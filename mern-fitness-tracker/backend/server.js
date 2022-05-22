/**
 * require express and other modules
 */
const express = require('express');
/**
 * cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */
const cors = require('cors');
/**
 * helps to connect to our mongoDB database and create a connection object called db that we can use to interact with the database (insert, update, delete, find) using the mongoose library
 * mongoose is a JavaScript library for working with MongoDB. It is a full-fledged Object Document Mapper tool for mapping between JavaScript objects and documents in MongoDB.
 */
const mongoose = require('mongoose');
/**
 * dotenv is a module for loading environment variables from a .env file into process.env (a global object) and into the current process.  It is a Node.js module that is used to load environment variables from a .env file into the process.env object.
 */
require('dotenv').config();
/**
 * Create our express server.Create a new express application instance( instance of express ) and store it in a variable called app( app is a variable name )( app is a variable name )
 */
const app = express();
/**
 * port is a variable name that stores the port number of the server
 */
const port = process.env.PORT || 5000;
/**
 * app use the cors middleware to allow cross-origin requests
 */
app.use(cors());
/**
 * middleware for parsing json data from the request body into a usable object in the request handler function (req.body)
 */
app.use(express.json());
/**
 * uri is a variable name that stores the connection string to our mongoDB database
 */
const uri = process.env.DB_URI;
/**
 * .connect()   is a method that is used to connect to a MongoDB database.  It takes one argument, the connection string.  The connection string is a string that contains the connection information for the database.  The connection string is in the following format:  mongodb://<dbuser>:<dbpassword>@<dbhost>[:<dbport>]/<dbname>  and for security reasons, the connection string should not be stored in a file.  Instead, it should be stored in an environment variable.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    /**
     * listen for requests on port and if no port is specified or is unavailable sets it to listen to port 5000
     */
    app.listen(port, () => {
      console.log(`Server is running o port: ${port}`);
    });
    console.log('MongoDB database connection established successfully');
  } catch (err) {
    console.error();
    console.log('Failed to connect to MongoDB', err.message);
  }
};
connectDB();
