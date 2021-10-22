import Order from '../../models/orderModel.js';
import asyncHandler from "express-async-handler"
import { response } from 'express';

/**
 * @description - update order to paid
 * @route POST /api/orders/:id/pay
 * @access Private
 * @return {Array} - the order object
 * 
 * */


 const getLoggedUsersOrders = asyncHandler(  async(req, res) => {
      const orders = await req.db.findCurrentUserOrders(req.user._id);
    if(!orders) {
       throw new Error('No orders found')
    }
   res.status(200).json(orders);
    
        
})
export default getLoggedUsersOrders;
