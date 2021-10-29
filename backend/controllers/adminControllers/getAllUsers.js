import asyncHandler from 'express-async-handler';

/**
 * @description - gets all users
 * @route GET /api/auth/users
 * @access Private route
 * @return  user object
 * */
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await req.db.findAllUsers();
  res.status(200).json(users);
});

export default getAllUsers;
