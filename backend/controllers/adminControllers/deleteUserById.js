import asyncHandler from 'express-async-handler';

/**
 * @description - Delete a user by id
 * @route   DELETE /api/auth/users/:id
 * @access Private route
 * @return
 * */
const deleteUserById = asyncHandler(async (req, res) => {
  const user = await req.db.findUserByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }
  res.status(200).json({
    message: 'User deleted successfully',
  });
});

export default deleteUserById;
