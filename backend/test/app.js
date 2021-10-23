import path from 'path'

import express from 'express';
import dotenv from 'dotenv';
import _ from 'colors';    
import cors from 'cors';
import morgan from 'morgan';
import hpp from 'hpp';
import helmet from 'helmet';


import productRoutes from '../routes/productRoutes.js'
import userRoutes from '../routes/userRoutes.js'
import orderRoutes from '../routes/orderRoutes.js'
import adminRoutes from '../routes/adminRoutes.js'
import uploadRoutes from '../routes/uploadRoutes.js'
import  notFound  from '../middleware/notFound.js';
import  errorHandler from '../middleware/errorHandler.js';




export default function app(database) {

const exposeDatabase = (req, res, next) => {
    req.db = database();
    next();
}


//CONFIG
dotenv.config({path:'./local.env'});


//INITIALIZE SERVER
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
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
app.use('/api/products', exposeDatabase,productRoutes);
app.use('/api/auth/users',exposeDatabase, adminRoutes);
app.use('/api/users',userRoutes); 
app.use('/api/orders',exposeDatabase,orderRoutes);
app.use('/api/upload',exposeDatabase,uploadRoutes);
app.get('/api/config/paypal',exposeDatabase, (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));
//ERROR HANDLERS
app.use(errorHandler)
app.use(notFound)

//STATIC FOLDER
const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

return app
}