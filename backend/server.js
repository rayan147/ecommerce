import express from 'express';
import dotenv from 'dotenv';
import _ from 'colors';    
import cors from 'cors';
import morgan from 'morgan';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import hpp from 'hpp';
import helmet from 'helmet';

import connectMongo from '../backend/config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import  notFound  from './middleware/notFound.js';
import  errorHandler from './middleware/errorHandler.js';
import options from './swaggerOptions.js';

// Load environment variables
const PORT = process.env?.PORT ?? 5000;
const NODE_ENV = process.env?.NODE_ENV ?? 'development';

//CONFIG
dotenv.config();

//DB
connectMongo()

//INITIALIZE SERVER
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(hpp());
// Set security headers
app.use(helmet());

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));



app.get('/', (req, res) => {
   return res.send('Hello World!');
});


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
//CORS
app.use(cors());

// ROUTES
app.use('/api/products', productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

//ERROR HANDLERS
app.use(errorHandler)
app.use(notFound)




 const server = app.listen(PORT, () => console.log(`Listening on port ${process.env.PORT} running in ${NODE_ENV} mode`.cyan.underline))
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