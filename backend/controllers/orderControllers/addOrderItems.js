import asyncHandler from 'express-async-handler';

/**
 * @description - Create a new order
 * @route POST /api/order/
 * @access Private
 * @return {Array} - the order object
 *
 * */

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  console.log('req.body', req.body);
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }
  const createdOrder = await req.db.createOrderAndAddItToMongodb({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  res.status(201).json(createdOrder);
});

export default addOrderItems;
