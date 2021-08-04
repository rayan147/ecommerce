import express from 'express';
import getAllProducts from '../controllers/productControllers/getAllProducts.js'
import getProductById from '../controllers/productControllers/getProductById.js'
const router = express.Router();


// GET
router.route('/').get(getAllProducts);
router.route('/:id',).get(getProductById);

export default router;
