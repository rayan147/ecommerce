import asyncHandler from 'express-async-handler';

/**
 * @description - Update a Order in the database and return the updated Order
 * @route  PUT /api/Orders/:id
 * @access Private route
 * @return
 * */

const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await req.db.findOrderByIdAndUpdate(req.params.id, req.body);
  if (!updatedOrder) {
    res.status(404);
    throw new Error('Order not Found');
  }
  res.status(201).json(updatedOrder);
});

export default updateOrder;
