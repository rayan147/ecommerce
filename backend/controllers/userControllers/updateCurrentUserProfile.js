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
  const user = await User.findByIdAndUpdate(req.user._id,req.body, {
    new: true,
    runValidators: true
  });

//   if(!user) {
//      res.status(404)
//      throw new Error('User not found');
//      return;
//    };
   res.status(201).json({
    _id: user._id,
    isAdmin:user.isAdmin,
    email: user.email,
    name : user.name,
    token: generateJsonWebTokenFromUserId(user._id)
   });

     
})

export default updateCurrentUserProfile;