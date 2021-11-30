import express from 'express';
import dotenv from 'dotenv';
import _ from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';

import productRoutes from '../routes/productRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import orderRoutes from '../routes/orderRoutes.js';
import adminRoutes from '../routes/adminRoutes.js';

// import  errorHandler from '../middleware/errorHandler.js';
import { successHandler, errorHandler } from '../logs/loggerMiddleware.js';

export default function app() {
  // CONFIG
  dotenv.config({ path: './local.env' });

  // INITIALIZE SERVER
  const app = express();
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(hpp());
  // Set security headers
  app.use(helmet());

  app.get('/', (req, res) =>
    res.send(`Nodejs API is running in ${process.env.NODE_ENV}`).status(200)
  );

  // Dev logging middleware
  // if (process.env.NODE_ENV === 'development') {
  //   app.use(morgan('dev'));
  // }

  app.use(cors());

  // PRODUCTIONS ROUTES
  app.use('/api/products', productRoutes);
  app.use('/api/auth/users', adminRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes);
  app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

  // ERROR HANDLERS
  app.use(errorHandler);
  // app.use(notFound())
  // SUCCESS HANDLER
  app.use(successHandler);

  return app;
}
