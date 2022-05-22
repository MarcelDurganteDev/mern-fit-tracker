import app from './server.js';
import config from './config/config.js';
import connectDB from './db/connect.js';

connectDB().then(async function onServerInit() {
  console.log(`Mongo DB connected`);

  app.listen(config.app.PORT, () => {
    console.log( `Server running at http://localhost:${config.app.PORT}` );
    
  });
});