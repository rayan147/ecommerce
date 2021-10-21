
import asyncHandler from "express-async-handler"

import mongoFactoryMethods from '../../config/mongoFactoryMethods.js';

const { findUserByIdAndDelete } = mongoFactoryMethods()
/**
 * @description - gets the current user profile
 * @route   DELETE /api/auth/users/:id
 * @access Private route
 * @return  
 * */
const deleteUserById = asyncHandler(async(req, res) => {
  const user = await findUserByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    });
  }
  res.status(200).json({
    message: "Product deleted successfully",
  });
});
 
     


export default deleteUserById;