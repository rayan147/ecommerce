
import asyncHandler from "express-async-handler"

import mongoFactoryMethods from '../../config/mongoFactoryMethods.js';

const {findUserByEmailWidthOutPasswordReturnUser} = mongoFactoryMethods()
/**
 * @description - gets users by id
 * @route GET /api/auth/user/:id
 * @access Private route
 * @return  user object
 * */
const getUserById = asyncHandler(async(req, res) => {
  const user = await findUserByEmailWidthOutPasswordReturnUser(req.params.id);
  if(user){
    return res.status(200).json(user);
   }
   res.status(404)
   throw new Error('User not Found')
     
})

export default getUserById;