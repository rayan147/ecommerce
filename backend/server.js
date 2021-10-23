import makeApp from './src/app.js'
import mongoFactoryMethods from './config/mongoFactoryMethods.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({path: '/local.env'});


db().connectMongo(process.env.MONGO_URL_PROD);
const app = makeApp(mongoFactoryMethods);

 const server = app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT} running in ${process.env.NODE_ENV} mode`.cyan.underline))
 process.on('SIGINT', () => {
     server.close(() => {
         process.exit(1);
     });
 });

 // Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
  });