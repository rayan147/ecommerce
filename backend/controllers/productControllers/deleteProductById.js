import asyncHandler from 'express-async-handler';

/**
 * @description - Delete a product by id
 * @route   DELETE /api/product/:id
 * @access Private route
 * @return
 * */

const deleteProductById = asyncHandler(async (req, res) => {
  const product = await req.db.deleteProductByItsId(req.params.id);
  if (!product) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  res.status(200).json({
    message: 'Product deleted successfully',
  });
});

export default deleteProductById;
