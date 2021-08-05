import User from '../../models/userModel.js';
import asyncHandler from "express-async-handler"
import  generateJsonWebTokenFromUserId from '../../utlis/generateJsonWebTokenFromUserId.js'



/**
 * @description - Register a new user
 * @route POST /api/users
 * @access Public route
 * @return the token & user object
 * */
 const registerUser = asyncHandler(  async(req, res) => {
    const { email, password,name } = req.body;
    console.log(email, password,name);
    const userExits = await User.findOne({ email });

    switch (true) {
        case userExits !== null ?? userExits !== undefined:
             res.status(400)
             throw new Error('User already exists');
            break;
        case userExits === null ?? userExits === undefined:
            const user = await User.create({
                email,
                password,
                name
            });
        case user !== null ?? user !== undefined:
            res.status(201).json({
                _id: user._id,
                isAdmin:user.isAdmin,
                email: user.email,
                name : user.name,
                token: generateJsonWebTokenFromUserId(user._id)
        })
            break;
        default: 
            res.status(400)
            throw new Error('invalid user input data');
            break;
    }
  
 })
 
 export default registerUser;