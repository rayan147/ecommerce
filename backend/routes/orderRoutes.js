import express from 'express';
import addOrderItems from '../controllers/orderControllers/addOrderItems.js'
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import getOrderById from '../controllers/orderControllers/getOrderById.js';
import updateOrderToPaid from '../controllers/orderControllers/updateOrderToPaid.js';
import getLoggedUsersOrders from '../controllers/orderControllers/getPaidOrders.js';
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
router.route('/myorders').get(authenticateUserToken,getLoggedUsersOrders);
router.route('/:id').get(authenticateUserToken,getOrderById);
router.route('/:id/pay').put(authenticateUserToken,updateOrderToPaid);

export default router;