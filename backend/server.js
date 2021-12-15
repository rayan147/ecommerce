import db from './config/db.js';
import app from './src/app.js';

db().connectMongo(
  'mongodb+srv://produce:produce@produce.yiddo.mongodb.net/products?retryWrites=true'
);

const PORT = process.env.PORT || 5000;
const serverApp = app();
const server = serverApp.listen(PORT, () =>
  console.log(`Listening on port ${PORT} running in ${process.env.NODE_ENV} mode`.cyan.underline)
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
