import Product from '../../models/productModel.js';
import asyncHandler from "express-async-handler"


/**
 * @description - gets the current user profile
 * @route  PUT /api/products/:id
 * @access Private route
 * @return  
 * */

const updateProduct = asyncHandler( async(req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    const {
        name,
        price,
        description,
        image,
        brand,
        category,
        countInStock,
      } = req.body
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{ name,
        price,
        description,
        image,
        brand,
        category,
        countInStock},{
        new: true,
        runValidators: true
    })
    if(!updatedProduct){
        res.status(404)
        throw new Error("Product not Found")
    }
   res.status(201).json(updatedProduct)
})

export default updateProduct