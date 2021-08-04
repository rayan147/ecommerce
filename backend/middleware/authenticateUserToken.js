import jsonWebToken from 'jsonwebtoken';
import asyncHandler from "express-async-handler"
import User from '../models/userModel.js';
import throwError from '../utlis/errorResponse.js';

const authenticateUserToken = asyncHandler( async(req, res, next) => {
    let token = null
     switch (true) {
         case req.headers.authorization !== undefined && req.headers.authorization.includes("Bearer"):
                token = req.headers.authorization.split(' ')[1]
                const decoded = jsonWebToken.verify(token, process.env.JWT_TOKEN_SECRET);
                 req.user = await User.findById(decoded.id).select('-password');
             break;
         case req.headers.authorization === undefined ?? !req.headers.authorization.includes("Bearer"):
                    throwError(401, "Invalid token")
             break;
     
         default:
             throwError(401, "No token provided")
             break;
     }
    next();
})
export default authenticateUserToken;