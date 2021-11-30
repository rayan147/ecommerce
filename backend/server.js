import dotenv from 'dotenv';
import db from './config/db.js';
import app from './src/app.js';

dotenv.config({ path: './.env' });

db().connectMongo(process.env.MONGO_URL_PROD);

const serverApp = app();
const server = serverApp.listen(process.env.PORT, () =>
  console.log(
    `Listening on port ${process.env.PORT} running in ${process.env.NODE_ENV} mode`.cyan.underline
  )
);
process.on('SIGINT', () => {
  server.close(() => {
    process.exit(1);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red);

  server.close(() => process.exit(1));
});
