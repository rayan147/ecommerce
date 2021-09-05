import express from 'express';

import authenticateUserToken from '../middleware/authenticateUserToken.js';
import isAdmin from '../middleware/isAdmin.js';
import deleteProductById from '../controllers/productControllers/deleteProductById.js';
import getAllProducts from '../controllers/productControllers/getAllProducts.js'
import getProductById from '../controllers/productControllers/getProductById.js'
import updateProduct from '../controllers/productControllers/updateProduct.js';
import createProduct from '../controllers/productControllers/createProduct.js';
import createProductReview from '../controllers/productControllers/createProductReviewed.js';
import getTopProducts from '../controllers/productControllers/getTopProducts.js';
const router = express.Router();


router.route('/')
.get(getAllProducts)
.post(authenticateUserToken,isAdmin,createProduct)

router.route('/:id/reviews').post(authenticateUserToken, createProductReview)
router.get('/top', getTopProducts)

router.route('/:id')
.get(getProductById)
.delete(authenticateUserToken,isAdmin, deleteProductById)
.put(authenticateUserToken,isAdmin,updateProduct)
export default router;