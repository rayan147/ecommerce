import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"

import mongoMethods from '../../config/mongoMethods.js';
const {deleteProductBy_Id} = mongoMethods();
/**
 * @description - gets the current user profile
 * @route   DELETE /api/auth/users/:id
 * @access Private route
 * @return  
 * */

const deleteProductById = asyncHandler( async(req, res) => {
    const product = await deleteProductBy_Id(req.params.id);
    if (!product) {
        return res.status(404).json({
          message: 'User not found'
        });
      }
      res.status(200).json({
        message: "User deleted successfully",
      });
     
})

export default deleteProductById;