import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'
import mongoMethods from '../../config/mongoMethods.js';
const {findUserByEmailWidthPasswordReturn} = mongoMethods();

/**
 * @description - Authenticate a user and return a token
 * @route POST /api/users/login
 * @access Public route
 * @return the token & user object
 * */
const authenticateUser = asyncHandler(  async(req, res) => {
   const { email, password } = req.body
   if(!email || !password) {
      res.status(400)
      throw new Error('Email and password are required')
      
   }
//   const user = await User.findOne({ email }).select('+password')
   const user = await findUserByEmailWidthPasswordReturn(email)
  if(!user){
    res.status(401)
    throw new Error('User not found')
 
  }
  const isValidPassword = await user.comparePassword(password) 
  if(!isValidPassword){
    res.status(401)
    throw new Error('Incorrect password')
  }

   const loggedInUser ={
      userId: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      name: user.name,
      token: generateJsonWebTokenFromUserId(user._id)
   }
   res.json(loggedInUser)

  

})

export default authenticateUser;