import { Router } from 'express';
import productsRouter from './products.routes';
import swaggerRouter from './swagger.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/swagger', swaggerRouter);
export default routes;
