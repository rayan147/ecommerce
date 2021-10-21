import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"

import mongoFactoryMethods from '../../config/mongoFactoryMethods.js';
const {findProductByName} = mongoFactoryMethods();

/**
 * @description - Get all products
 * @route /api/products
 * @access public
 * @return {Array} - Array of products
 * 
 * */


const getAllProducts = asyncHandler(  async(req, res) => {
    const pageSize = 9
    const page = +req.query.pageNumber || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Product.countDocuments({ ...keyword })
    const products = await findProductByName({ ...keyword })
      // .limit(pageSize)
      // .skip(pageSize * (page - 1))
    const limitProducts = products.limit(pageSize).skip(pageSize * (page - 1)) 
    res.json({ limitProducts, page, pages: Math.ceil(count / pageSize) })
})

export default getAllProducts;