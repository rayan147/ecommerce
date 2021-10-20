import path from 'path'

import express from 'express';
import dotenv from 'dotenv';
import _ from 'colors';    
import cors from 'cors';
import morgan from 'morgan';
import hpp from 'hpp';
import helmet from 'helmet';

import connectMongo from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import  notFound  from './middleware/notFound.js';
import  errorHandler from './middleware/errorHandler.js';
import  Redis from 'redis'

const redisClient = Redis.createClient(process.env.REDIS_URL)


// Load environment variables
const PORT = process.env?.PORT ?? 5000;
const NODE_ENV = process.env?.NODE_ENV ?? 'development';

//CONFIG
dotenv.config({path:'../.env'});

//DB
connectMongo()

//INITIALIZE SERVER
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(hpp());
// Set security headers
app.use(helmet());

console.log(process.env.MONGO_URL)

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
app.use('/api/auth/users', adminRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);
app.get('/api/config/paypal', (req, res) => res.send(process.env?.PAYPAL_CLIENT_ID));
//ERROR HANDLERS
app.use(errorHandler)
app.use(notFound)

//STATIC FOLDER
const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))



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