import path from 'path'

import express from 'express';
import dotenv from 'dotenv';
import _ from 'colors';    
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';


import productRoutes from '../routes/productRoutes.js'
import userRoutes from '../routes/userRoutes.js'
import orderRoutes from '../routes/orderRoutes.js'
import adminRoutes from '../routes/adminRoutes.js'
import  notFound  from '../middleware/notFound.js';
// import  errorHandler from '../middleware/errorHandler.js';
import { successHandler,errorHandler} from '../logs/loggerMiddleware'



export default function app(database) {

const exposeDatabase = (req, res, next) => {
    req.db = database();
    next();
}


//CONFIG
dotenv.config({path:'./local.env'});


//INITIALIZE SERVER
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(hpp());
// Set security headers
app.use(helmet());


app.get('/', (req, res) => {
   return res.send('Nodejs API is running...').status(200);
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
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));


//ERROR HANDLERS
app.use(errorHandler)
app.use(notFound)
//SUCCESS HANDLER
app.use(successHandler)

return app
}