import express from 'express';
import addOrderItems from '../controllers/orderControllers/addOrderItems.js'
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import getOrderById from '../controllers/orderControllers/getOrderById.js';
const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

// POST  
router.route('/create').post(authenticateUserToken,addOrderItems);

// GET
router.route('/:id').get(authenticateUserToken,getOrderById);

export default router;