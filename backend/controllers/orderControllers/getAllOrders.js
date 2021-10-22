import Order from '../../models/orderModel.js';
import asyncHandler from "express-async-handler"

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await req.db.findAllOrders();
    res.json(orders)
  })

  export default getAllOrders