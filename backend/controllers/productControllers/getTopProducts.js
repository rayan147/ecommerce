import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"
import {promisify} from 'util'

const redisSet = promisify(redisClient.set).bind(redisClient)
const redisGet = promisify(redisClient.get).bind(redisClient)

const DEFAULT_EXPIRATION = 3600

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => { 
  const products = await Product.find({}).sort({ rating: -1 }).limit(15)
    try {
       await redisSet('tops',products )
    } catch (error) {
      
    }
   
  
    res.json(products)
  })

export default getTopProducts