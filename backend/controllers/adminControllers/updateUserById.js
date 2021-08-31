import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'
/**
 * @description - Update the current user profile
 * @route PUT /api/users/profile
 * @access Private route
 * @return  user object
 * */
const updateUserById = asyncHandler(async(req, res) => {
  
  const {email,name,isAdmin} =req.body
 
  console.log(req.body)

  const user = await User.findByIdAndUpdate(req.params.id,{email,name,isAdmin} ,{
    new: true,
    runValidators: true
  });

    const updatedUser ={
      _id: user._id,
    isAdmin:user.isAdmin,
    email: user.email,
    name : user.name,
    token: generateJsonWebTokenFromUserId(user._id)
    }



   res.status(201).json(updatedUser);
   

})

export default updateUserById;

