import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"

import mongoFactoryMethods from '../../config/mongoFactoryMethods.js';
const {findProductById} = mongoFactoryMethods();

const getProductById = asyncHandler( async(req, res) => {
    const product = await findProductById(req.params.id);

    if(product) {
        res.json(product);
        return;
     } 
     res.status(404)
     throw new Error('Product not found');
     
})

export default getProductById;