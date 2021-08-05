import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import fs from 'fs';
import path from 'path';    
import morgan from 'morgan';
import connectMongo from '../backend/config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import  notFound  from './middleware/notFound.js';
import  errorHandler from './middleware/errorHandler.js';

const PORT = process.env.PORT ?? 5000;
const NODE_ENV = process.env.NODE_ENV ?? 'dev';
//ENVS
dotenv.config();

//CONFIG
connectMongo()

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
   return res.send('Hello World!');
});

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(new URL('access.log',import.meta.url), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

// ROUTES
app.use('/api/products', productRoutes);
app.use('/api/users',userRoutes);

//ERROR HANDLERS
app.use(errorHandler)
app.use(notFound)




 const server = app.listen(PORT, () => console.log(`Listening on port ${5000} running in ${NODE_ENV} mode`.cyan.underline))
 process.on('SIGINT', () => {
     server.close(() => {
         process.exit(1);
     });
 });
