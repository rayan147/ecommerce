
import asyncHandler from "express-async-handler"


/**
 * @description - gets the current user profile
 * @route   POST /api/products
 * @access Private route
 * @return  
 * */

const createProduct = asyncHandler( async(req, res) => {
    const createdProduct = await req.db.createProductAndAddItToMongodb({
        name:'Name',
        price:0,
        user:req.user._id,
        image:'/images/sample.jpg',
        brand:'brand',
        category:'category',
        countInStock:0,
        numReviews:0,
        description:"description"

    })
   res.status(201).json(createdProduct)
})

export default createProduct