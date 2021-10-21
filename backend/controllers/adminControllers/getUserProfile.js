import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"

import mongoFactoryMethods from '../../config/mongoFactoryMethods.js';
const {findUserById} = mongoFactoryMethods()
/**
 * @description - gets the current user profile
 * @route GET /api/users/profile
 * @access Private route
 * @return  user object
 * */
const getUserProfile = asyncHandler(async(req, res) => {

  const user = await findUserById(req.params.id);

  if(!user) {
     res.status(404)
     throw new Error('User not found');
 
   };
   res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
   });

     
})

export default getUserProfile;