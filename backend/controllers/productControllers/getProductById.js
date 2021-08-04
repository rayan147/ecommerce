import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"
import throwError from '../../utlis/errorResponse.js';

const getProductById = asyncHandler( async(req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.json(product);
        return;
     } 
     throwError(404, 'Product not found');
})

export default getProductById;