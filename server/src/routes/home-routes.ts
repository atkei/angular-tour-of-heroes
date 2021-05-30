import Express from 'express';
import homeController from '../controllers/home-controller';

const router = Express.Router();

router.get('/', homeController.index);

export default router;
