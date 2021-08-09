import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'
/**
 * @description - Update the current user profile
 * @route PUT /api/users/profile
 * @access Private route
 * @return  user object
 * */
const updateCurrentUserProfile = asyncHandler(async(req, res) => {
  
  const {id,email,name,password} =req.body
  
  console.log('req.body',req.body)
  const user = await User.findByIdAndUpdate(id,{email,name,password} ,{
    new: true,
    runValidators: true
  });


   res.status(201).json({
    _id: user._id,
    isAdmin:user.isAdmin,
    email: user.email,
    name : user.name,
    token: generateJsonWebTokenFromUserId(user._id)
   });

    console.log({user}) 
})

export default updateCurrentUserProfile;