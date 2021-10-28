import asyncHandler from 'express-async-handler';

/**
 * @description - gets the current user profile
 * @route  PUT /api/products/:id
 * @access Private route
 * @return
 * */

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;
  const updatedProduct = await req.db.findProductByIdAndUpdate(req.params.id, {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  });

  if (!updatedProduct) {
    res.status(404);
    throw new Error('Product not Found');
  }
  res.status(201).json(updatedProduct);
});

export default updateProduct;
