import express from 'express';
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import authenticateUser from '../controllers/userControllers/authenticateUser.js'
import getCurrentUserProfile from '../controllers/userControllers/getCurrentUserProfile.js'
import registerUser from '../controllers/userControllers/registerUser.js'
const router = express.Router();


// GET
router.route('/profile').get(authenticateUserToken,getCurrentUserProfile);

// POST  
router.route('/login').post(authenticateUser);
router.route('/').post(registerUser);
export default router;
