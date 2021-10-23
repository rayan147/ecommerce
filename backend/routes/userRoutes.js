import express from 'express';
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import authenticateUser from '../controllers/userControllers/authenticateUser.js'
import getCurrentUserProfile from '../controllers/userControllers/getCurrentUserProfile.js'
import registerUser from '../controllers/userControllers/registerUser.js'
import updateCurrentUserProfile from '../controllers/userControllers/updateCurrentUserProfile.js';
import exposeDatabase from '../middleware/exposeDatabase.js';

const router = express.Router();

router
.route('/profile')
.get(exposeDatabase,authenticateUserToken,getCurrentUserProfile)
.put(exposeDatabase,authenticateUserToken,updateCurrentUserProfile)

// POST  
router.route('/login').post(exposeDatabase,authenticateUser);
router.route('/register').post(exposeDatabase,registerUser);

router.route('/:id').get(exposeDatabase,authenticateUserToken,getCurrentUserProfile)
export default router;
