/**
 * instead of using REQUIRE / MODULE.EXPORTS let's use IMPORT / EXPORT express and other modules
 * You can't selectively load only the pieces you need with require but with import, you can selectively load only the pieces you need, which can save memory.
 * Loading is synchronous(step by step) for require on the other hand import can be asynchronous(without waiting for previous import) so it can perform a little better than require.
 */
import express from 'express';
/**
 * cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */
import cors from 'cors';
/** 
 *  morgan is a middleware for express that logs all requests to the console. It can also be used to log requests to a file, a database, a stream, a function, a custom object or to a custom class.  
 */
import morgan from 'morgan';
/** 
 * HELMET is a node.js package for setting HTTP headers to prevent attacks. 
 * It changes the headers to a more secure set of headers as well as setting the X-XSS-Protection header to 1, 
 * It sets x-powered-by to false which prevents attackers from identifing the server type.  
 * It sets the X-Content-Type-Options header to nosniff which prevents attackers from using the X-Content-Type-Options header to sniff the MIME type of the content. 
 * It sets the X-Frame-Options header to DENY which prevents attackers from framing the website.
 * It sets the Strict-Transport-Security header to max-age=15768000 which is the default value for the HSTS header (HSTS is a HTTP header that tells browsers to only use the HTTPS protocol) to prevent attackers from using the HTTP protocol to access the website. 
 * It sets the X-Download-Options header to noopen which avoids the IE popup which is a security risk. 
 * Helmet adds a few other headers to the response in order to prevent attacks like clickjacking, MIME sniffing, and cross-site scripting attacks.
 */
import helmet from 'helmet';

import config from './config/config.js';

import userRouter from './routes/users-routes.js';

/**
 * Create our express server.Create a new express application instance( instance of express ) and store it in a variable called app( app is a variable name )( app is a variable name )
 */
const app = express();

/** 
 * 'Dev' mode logs the request and response status code, the total response time, and the request and response headers. 
 * 'Small' morgan logs only the request and response status code and the total response time.
 * 'Tiny' morgan logs only the request and response status code.  
 */
app.use(morgan('dev'));
app.use( helmet() );
/**
 * middleware for parsing json data from the request body into a usable object in the request handler function (req.body)
 */
app.use( express.json() );
/**
 * app use the cors middleware to allow cross-origin requests
 */
app.use(
  cors( {
    /** 
     * Setting the origin to client url so that we can access the server from the client side. The client url is set in the config file and captured in the client/src/config/config.js file.
     */
    origin: config.client.URL
  })
);

app.use( userRouter );

export default app; 

