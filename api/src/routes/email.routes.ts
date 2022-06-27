import { Router } from 'express';
import EmailModel from '../model/EmailModel';
import EmailRepository from '../repository/EmailRepository';

// class EmailRouter {
//   private emailRepository;

//   constructor(emailRepository: IRepository<EmailModel>) {
//     this.emailRepository = emailRepository;
//   }

//   async getAsync(req: Request, res: Response) { }

//   async getByIdAsync(req: Request, res: Response) { }

//   async postAsync(req: Request, res: Response) { }

//   async putAsync(req: Request, res: Response) { }

//   async deleteAsync(req: Request, res: Response) { }
// }

const emailRouter = Router();

const emailRepository = new EmailRepository();

/**
 * @swagger
 * /email:
 *  get:
 *    description: Retorna todos os emails.
 *    responses:
 *      "200":
 *          description: Lista com todos os emails.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 */
emailRouter.get('/', async (req, res) => {
  try {
    const emails = await emailRepository.listAsync();
    return res.json(emails);
  } catch (error) {
    return res.status(500).json(error);
  }
});
/**
 * @swagger
 * /email/{id}:
 *  get:
 *    description: Retorna o email baseado no id.
 *    responses:
 *      "200":
 *          description: Email encontrado.
 *      "404":
 *          description: Email não encontrado.
 */
emailRouter.get('/:id', async (req, res) => {
  try {
    const found = await emailRepository.findAsync(parseInt(req.params.id, 10));
    if (found !== null) {
      return res.json(found);
    }
    return res.status(404).json({ errors: ['Email não encontrado.'] });
  } catch (error) {
    return res.status(500).json(error);
  }
});
/**
 * @swagger
 * /email:
 *  post:
 *    description: Cria um novo email.
 *    responses:
 *      "200":
 *          description: Email criado.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *      "400":
 *          description: Alguma informação no body está incorreta.
 */
emailRouter.post('/', async (req, res) => {
  try {
    // TODO validar body da request
    const created = await emailRepository.createAsync(req.body);
    return res.json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
});
/**
 * @swagger
 * /email/{id}:
 *  put:
 *    description: Edita um email existente.
 *    responses:
 *      "200":
 *          description: Email atualizado.
 *      "400":
 *          description: Alguma informação no body está incorreta.
 *      "404":
 *          description: Email não encontrado.
 */
emailRouter.put('/:id', async (req, res) => {
  try {
    // TODO validar body da request
    const { email, nome } = req.body;
    const foundEmail = await emailRepository.findAsync(
      parseInt(req.params.id, 10),
    );
    if (foundEmail !== null) {
      const edited = new EmailModel({ ...foundEmail, email, nome });
      const result = await emailRepository.updateAsync(edited);
      return res.json(result);
    }
    return res.status(404).json({ errors: ['Email não encontrado'] });
  } catch (error) {
    return res.status(500).json(error);
  }
});
/**
 * @swagger
 * /email/{id}:
 *  delete:
 *    description: Deleta um email existente.
 *    responses:
 *      "200":
 *          description: Email deletado.
 *      "404":
 *          description: Email não encontrado.
 */
emailRouter.delete('/:id', async (req, res) => {
  try {
    const foundEmail = await emailRepository.findAsync(
      parseInt(req.params.id, 10),
    );
    if (foundEmail !== null) {
      const result = await emailRepository.deleteAsync(foundEmail);
      return res.json(result);
    }
    return res.status(404).json({ errors: ['Email não encontrado'] });
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default emailRouter;
