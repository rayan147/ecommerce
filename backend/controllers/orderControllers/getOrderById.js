import asyncHandler from 'express-async-handler';

/**
 * @description - Get order by ID
 * @route POST /api/orders/:id
 * @access Private
 * @return {Array} - the order object
 *
 * */

const getOrderById = asyncHandler(async (req, res) => {
  const order = await req.db.findOrderById(req.params.id);

  if (order) {
    return res.json(order);
  }
  res.status(404);
  throw new Error('Order not found');
});

export default getOrderById;
