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

import exposeDatabase from '../middleware/exposeDatabase.js';

const router = express.Router();


router.route('/')
.get(exposeDatabase,getAllProducts)
.post(exposeDatabase,authenticateUserToken,isAdmin,createProduct)

router.route('/:id/reviews').post(exposeDatabase,authenticateUserToken, createProductReview)
router.get('/top', getTopProducts)

router.route('/:id')
.get(exposeDatabase,getProductById)
.delete(exposeDatabase,authenticateUserToken,isAdmin, deleteProductById)
.put(exposeDatabase,authenticateUserToken,isAdmin,updateProduct)
export default router;