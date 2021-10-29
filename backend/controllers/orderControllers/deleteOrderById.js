import asyncHandler from 'express-async-handler';

/**
 * @description - Delete order by id
 * @route   DELETE /api/orders/:id
 * @access Private route
 * @return
 * */

const deleteOrderById = asyncHandler(async (req, res) => {
  const order = await req.db.findOrderByIdAndDelete(req.params.id);
  if (!order) {
    return res.status(404).json({
      message: 'Order not found',
    });
  }
  res.status(200).json({
    message: 'Order deleted successfully',
  });
});

export default deleteOrderById;
