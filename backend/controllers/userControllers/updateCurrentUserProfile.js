import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'
import mongoMethods from '../../config/mongoMethods.js';
const {findUserByIdAndUpdate} = mongoMethods();

/**
 * @description - Update the current user profile
 * @route PUT /api/users/profile
 * @access Private route
 * @return  user object
 * */
const updateCurrentUserProfile = asyncHandler(async(req, res) => {
  
  const {user_id,email,name,password} =req.body
  console.log("req.body",req.body)
  const user = await findUserByIdAndUpdate(user_id,{email,name,password});

    const updatedUser ={
      _id: user._id,
    isAdmin:user.isAdmin,
    email: user.email,
    name : user.name,
    token: generateJsonWebTokenFromUserId(user._id)
    }



   res.status(201).json(updatedUser);
   

})

export default updateCurrentUserProfile;