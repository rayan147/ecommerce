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


 const updateOrderToPaid = asyncHandler(  async(req, res) => {
    const order = await req.db.findOrderByIdAndNotPopulate(req.params.id)

    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      }
  
      const updatedOrder = await order.save()
  
      res.json(updatedOrder)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
        
})




export default  updateOrderToPaid;