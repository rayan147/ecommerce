import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"



// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => { 
  const products = await Product.find({}).sort({ rating: -1 }).limit(15)

    res.json(products)
  })

export default getTopProducts