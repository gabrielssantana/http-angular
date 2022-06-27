import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Email API',
      version: '1.0.0',
    },
  },
  apis: ['src/routes/*routes.ts'],
};
const swaggerSpec = swaggerJSDoc(options);
const swaggerRouter = Router();
swaggerRouter.use(swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(swaggerSpec));

export default swaggerRouter;
