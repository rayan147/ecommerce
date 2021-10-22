
import asyncHandler from "express-async-handler"



const getProductById = asyncHandler( async(req, res) => {
    const product = await req.db.findProductById(req.params.id);

    if(product) {
        res.json(product);
        return;
     } 
     res.status(404)
     throw new Error('Product not found');
     
})

export default getProductById;