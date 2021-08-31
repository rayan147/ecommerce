import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"

/**
 * @description - gets users by id
 * @route GET /api/auth/user/:id
 * @access Private route
 * @return  user object
 * */
const getUserById = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if(user){
    return res.status(200).json(user);
   }
   res.status(404)
   throw new Error('User not Found')
     
})

export default getUserById;