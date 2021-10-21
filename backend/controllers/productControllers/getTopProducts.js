import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"

import {get,saveWithTtl} from '../../redis/cache'


// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => { 
  const cacheKey = 'getTopProducts'
  const cachedData = await get(cacheKey)
  
  if(cachedData){
    console.log('data from cached data')
    res.json(cachedData)
  }

  const products = await Product.find({}).sort({ rating: -1 }).limit(15)
  await saveWithTtl(cacheKey,products,300)
    res.json(products)
  })

export default getTopProducts