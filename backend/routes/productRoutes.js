import express from 'express';
import getAllProducts from '../controllers/productControllers/getAllProducts.js'
import getProductById from '../controllers/productControllers/getProductById.js'
const router = express.Router();

/**
  @swagger
 * components:
 * - schemas:
 *  - Product:
 *   - type: object
 *   - required:
 *   - id:
 *   - name:
 * - Product:
 * - type: object
 * - properties:
 * - id:
 * **/
router.route('/').get(getAllProducts);
router.route('/:id',).get(getProductById);

export default router;