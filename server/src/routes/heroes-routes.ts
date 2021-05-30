import Express from 'express';
import heroesController from '../controllers/heroes-controller';

const router = Express.Router();

router.get('/', heroesController.index);

export default router;
