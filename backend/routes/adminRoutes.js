import express from 'express';
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import getAllUsers from '../controllers/adminControllers/getAllUsers.js';
import isAdmin from '../middleware/isAdmin.js';
import deleteUserById from '../controllers/adminControllers/deleteUserById.js';
import updateUserById from '../controllers/adminControllers/updateUserById.js';
import getUserById from '../controllers/adminControllers/getUserById.js';
import getUserProfile from  '../controllers/adminControllers/getUserProfile.js'

import exposeDatabase from '../middleware/exposeDatabase.js';

const router = express.Router();



router
.route('/')
.get(exposeDatabase,authenticateUserToken,isAdmin,getAllUsers)

router.
route('/:id')
.delete(exposeDatabase,authenticateUserToken,isAdmin,deleteUserById)
.put(exposeDatabase,authenticateUserToken,isAdmin,updateUserById)
.get(exposeDatabase,authenticateUserToken,isAdmin,getUserById)
.get(exposeDatabase,authenticateUserToken,isAdmin,getUserProfile)
export default router;
