import express from 'express';
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import getAllUsers from '../controllers/adminControllers/getAllUsers.js';
import isAdmin from '../middleware/isAdmin.js';
import deleteUserById from '../controllers/adminControllers/deleteUserById.js';
import updateUserById from '../controllers/adminControllers/updateUserById.js';
import getUserById from '../controllers/adminControllers/getUserById.js';
import getUserProfile from  '../controllers/adminControllers/getUserProfile.js'
const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router
.route('/')
.get(authenticateUserToken,isAdmin,getAllUsers)

router.
route('/:id')
.delete(authenticateUserToken,isAdmin,deleteUserById)
.put(authenticateUserToken,isAdmin,updateUserById)
.get(authenticateUserToken,isAdmin,getUserById)
.get(authenticateUserToken,isAdmin,getUserProfile)
export default router;
