import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"

/**
 * @description - Get all products
 * @route /api/products
 * @access public
 * @return {Array} - Array of products
 * 
 * */


const getAllProducts = asyncHandler(  async(req, res) => {
    const products = await Product.find({});
    res.json(products);
})

export default getAllProducts;