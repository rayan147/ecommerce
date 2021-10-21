import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"

import mongoFactoryMethods from '../../config/mongoFactoryMethods.js';

const { findAllUsers } = mongoFactoryMethods;  
/**
 * @description - gets all users
 * @route GET /api/auth/uers
 * @access Private route
 * @return  user object
 * */
const getAllUsers = asyncHandler(async(req, res) => {
  const users = await findAllUsers();
  res.status(200).json(users);
     
})

export default getAllUsers;