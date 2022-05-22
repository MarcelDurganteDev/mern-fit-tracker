/**
 * dotenv is a module for loading environment variables from a .env file into process.env (a global object) and into the current process.  It is a Node.js module that is used to load environment variables from a .env file into the process.env object.
 */
import dotenv from 'dotenv';
dotenv.config();

/**
 * ENV is a variable name that stores the environment name of the server (development, staging, production). 
 * 
 * It is used to determine which environment the server is running in and works by checking the NODE_ENV environment variable and if it is not set, it defaults to development.
 *  
 * Inside the if statement, we check if the environment is development and if it is, we load the development environment variables. 
 * 
 * Inside the CONFIG Object:
 * 
 *  Set app PORT to the port number that is stored in the process.env.PORT so that we can use it in the server.js file to start the server.
 * 
 * The CLIENT_URL is used to set the client URL that is used to access the server from the client side. For example if the client is running on localhost:3000, the client URL is localhost:3000 if not it is the same as the server URL.
 * 
 * Set DB_URI to the connection string that is stored in the process.env.DB_URI variable so that we can use it to connect to our MongoDB database.
 * 
 * We then export the config object. This is used by the server.js file to load the config object. This is a good way to load environment variables into the process.env object.  
 */
const ENV = process.env.NODE_ENV || 'development';

const CONFIG = {
  development: {
    app: {
      /**
       * Set app PORT to the port number that is stored in the process.env.PORT so that we can use it in the server.js file to start the server.
       */
      PORT: process.env.PORT || 4000
    },
    client: {
      /**
       * CLIENT_URL is used to set the client URL that is used to access the server from the client side. For example if the client is running on localhost:3000, the client URL is localhost:3000 if not it is the same as the server URL.
       *
       * CLIENT_URL is the URL of the client app and is used to generate the correct URL for the client app to use when making API calls to the server. 
       * 
       * This is necessary because the client app is hosted on a different domain than the server app. 
       * 
       * When the client access our application .env automatically loads the client url from the .env file.
       *
       */
      URL: process.env.CLIENT_URL || 'http://localhost:3000'
    },
    db: {
      /**
       * uri is a variable name that stores the connection string to our mongoDB database
       */
      URI: process.env.DB_URI
    }
  }
};

/**
 * We are using the dot notation to access the CONFIG object.  
 * 
 * The dot notation is a way to access nested objects. 
 * 
 * The dot notation is more readable and it is more efficient. So in the below export statement, we are using the dot notation to access the  app PORT, the DB_URI property and the client URL.
 * 
 *   We are exporting the CONFIG object. This is used by the server.js file to load the config object. This is a good way to load environment variables into the process.env object.
 */
export default CONFIG[ENV];