import { Router } from 'express';

const productsRouter = Router();

const products = [];

/**
 * @swagger
 * /products:
 *  get:
 *    description: Retorna todos os produtos.
 *    responses:
 *      "200":
 *          description: Lista com todos os produtos.
 */
productsRouter.get('/', (req, res) => {
  return res.json(products);
});

export default productsRouter;
