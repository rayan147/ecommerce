import express from 'express';
import addOrderItems from '../controllers/orderControllers/addOrderItems.js'
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import getOrderById from '../controllers/orderControllers/getOrderById.js';
import updateOrderToPaid from '../controllers/orderControllers/updateOrderToPaid.js';
import getLoggedUsersOrders from '../controllers/orderControllers/getPaidOrders.js';
import getAllOrders from '../controllers/orderControllers/getAllOrders.js';
import updateOrderToDelivered from '../controllers/orderControllers/updateOrderToDelivered.js'
import isAdmin from '../middleware/isAdmin.js';
const router = express.Router();


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

// POST  
router.route('/')
.post(authenticateUserToken,isAdmin,addOrderItems)
.get(authenticateUserToken,getAllOrders) 

// GET
router.route('/myorders').get(authenticateUserToken,getLoggedUsersOrders)
router.route('/:id').get(authenticateUserToken,getOrderById)
router.route('/:id/pay').put(authenticateUserToken,updateOrderToPaid)
router.route('/:id/deliver').put(authenticateUserToken, isAdmin, updateOrderToDelivered)

export default router;