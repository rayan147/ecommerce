import Order from '../../models/orderModel.js';
import asyncHandler from "express-async-handler"
import { response } from 'express';

/**
 * @description - Get order by ID
 * @route POST /api/orders/:id
 * @access Private
 * @return {Array} - the order object
 * 
 * */


 const getOrderById = asyncHandler(  async(req, res) => {
   const order = await Order.findById(req.params.id).populate('user','name email');
 console.log(req.params.id)
   if(order) {
  return  res.json(order);
   
}
res.status(404)
throw new Error('Order not found');
        
})




export default getOrderById;