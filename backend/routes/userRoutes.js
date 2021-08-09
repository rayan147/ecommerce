import express from 'express';
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import authenticateUser from '../controllers/userControllers/authenticateUser.js'
import getCurrentUserProfile from '../controllers/userControllers/getCurrentUserProfile.js'
import registerUser from '../controllers/userControllers/registerUser.js'
import updateCurrentUserProfile from '../controllers/userControllers/updateCurrentUserProfile.js';
const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router
.route('/profile')
.get(authenticateUserToken,getCurrentUserProfile)
.put(authenticateUserToken,updateCurrentUserProfile)

// POST  
router.route('/login').post(authenticateUser);
router.route('/register').post(registerUser);
export default router;
