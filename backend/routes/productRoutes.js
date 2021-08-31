import express from 'express';

import authenticateUserToken from '../middleware/authenticateUserToken.js';
import isAdmin from '../middleware/isAdmin.js';
import deleteProductById from '../controllers/productControllers/deleteProductById.js';
import getAllProducts from '../controllers/productControllers/getAllProducts.js'
import getProductById from '../controllers/productControllers/getProductById.js'
const router = express.Router();


router.route('/').get(getAllProducts);
router.route('/:id',).get(getProductById).delete(authenticateUserToken,isAdmin, deleteProductById)
export default router;