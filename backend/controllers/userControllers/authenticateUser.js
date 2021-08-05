import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'



/**
 * @description - Authenticate a user and return a token
 * @route POST /api/users/login
 * @access Public route
 * @return the token & user object
 * */
const authenticateUser = asyncHandler(  async(req, res) => {
   const { email, password } = req.body

  const user = await User.findOne({ email })
  
  if(user){
   const isValidPassword = await user.comparePassword(password) 
   const { _id, email, name,isAdmin } = user
   if(isValidPassword){
       res.json({
      _id,
      name,
      email,
      isAdmin,
      token: generateJsonWebTokenFromUserId(_id),
    })
    return
  }}

    res.status(401)
    throw new Error('Invalid email or password')
  

})

export default authenticateUser;