import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'
import throwError from '../../utlis/errorResponse.js';


/**
 * @description - Authenticate a user and return a token
 * @route POST /api/users/login
 * @access Public route
 * @return the token & user object
 * */
const authenticateUser = asyncHandler(  async(req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
    switch (true) {
       case user !== null ?? user === undefined:
         const doPasswordsMatch = await user.comparePassword(password);
         if(user && doPasswordsMatch) {
         res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateJsonWebTokenFromUserId(user._id)
         })
      }
       break;
       case user === null ?? user === undefined:
         throwError(401, "Invalid email or password")
          break;
       default:
          throwError(500, "Internal server error")
          break;
    }
 

})

export default authenticateUser;