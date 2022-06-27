import { Router } from 'express';
import emailRouter from './email.routes';
import swaggerRouter from './swagger.routes';

const routes = Router();

routes.use('/email', emailRouter);
routes.use('/swagger', swaggerRouter);
export default routes;
