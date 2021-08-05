import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"

/**
 * @description - gets the current user profile
 * @route GET /api/users/profile
 * @access Private route
 * @return  user object
 * */
const getCurrentUserProfile = asyncHandler(async(req, res) => {
  const user = await User.findById(req.user._id);

  if(!user) {
     res.status(404)
     throw new Error('User not found');
     return;
   };
   res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
   });

     
})

export default getCurrentUserProfile;