import express from 'express';
import addOrderItems from '../controllers/orderControllers/addOrderItems.js';
import authenticateUserToken from '../middleware/authenticateUserToken.js';
import getOrderById from '../controllers/orderControllers/getOrderById.js';
import updateOrderToPaid from '../controllers/orderControllers/updateOrderToPaid.js';
import getLoggedUsersOrders from '../controllers/orderControllers/getPaidOrders.js';
import getAllOrders from '../controllers/orderControllers/getAllOrders.js';
import updateOrderToDelivered from '../controllers/orderControllers/updateOrderToDelivered.js';
import isAdmin from '../middleware/isAdmin.js';
import exposeDatabase from '../middleware/exposeDatabase.js';
import deleteOrderById from '../controllers/orderControllers/deleteOrderById.js';
import updateOrder from '../controllers/orderControllers/updateOrder.js';

const router = express.Router();

// POST
router
  .route('/')
  .post(exposeDatabase, authenticateUserToken, addOrderItems)
  .get(exposeDatabase, authenticateUserToken, getAllOrders);

// GET
router.route('/myorders').get(exposeDatabase, authenticateUserToken, getLoggedUsersOrders);
router
  .route('/:id')
  .get(exposeDatabase, authenticateUserToken, getOrderById)
  .put(exposeDatabase, authenticateUserToken, updateOrder)
  .delete(exposeDatabase, authenticateUserToken, deleteOrderById);
router.route('/:id/pay').put(exposeDatabase, authenticateUserToken, updateOrderToPaid);
router
  .route('/:id/deliver')
  .put(exposeDatabase, authenticateUserToken, isAdmin, updateOrderToDelivered);

export default router;
