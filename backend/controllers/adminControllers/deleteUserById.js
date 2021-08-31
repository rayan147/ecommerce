import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"

/**
 * @description - gets the current user profile
 * @route   DELETE /api/auth/users/:id
 * @access Private route
 * @return  
 * */
const deleteUserById = asyncHandler(async(req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
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