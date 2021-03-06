import jsonWebToken from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const authenticateUserToken = asyncHandler(async (req, res, next) => {
  console.log('JWT authenticateUserToken middleware',process.env.JWT_SECRET);
  let token = null;
  switch (true) {
    case req.headers.authorization !== undefined && req.headers.authorization.includes('Bearer'):
      token = req.headers.authorization.split(' ')[1];
      const decoded = jsonWebToken.verify(token, process.env.JWT_TOKEN_SECRET);
      console.log('token: ', token);
      req.user = await User.findById(decoded.id).select('-password');
      break;
    case req.headers.authorization === undefined ?? !req.headers.authorization.includes('Bearer'):
      res.status(401);
      throw new Error('Unauthorized,no token provide');
    default:
      res.status(401);
      throw new Error('Unauthorized,no token provide');
  }
  next();
});
export default authenticateUserToken;
