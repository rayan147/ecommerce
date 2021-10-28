import asyncHandler from 'express-async-handler';
import Product from '../../models/productModel.js';
/**
 * @description - Get all products
 * @route /api/products
 * @access public
 * @return {Array} - Array of products
 *
 * */

const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 27;
  const page = +req.query.pageNumber || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

export default getAllProducts;
