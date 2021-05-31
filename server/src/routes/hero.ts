import Express, { Request, Response } from 'express';
import { Hero } from '../models/hero';

const router = Express.Router();

router.get('/heroes', async (req: Request, res: Response) => {
  const hero = await Hero.find({});
  return res.status(200).send(hero);
});

router.post('/heroes', async (req: Request, res: Response) => {
  const newHero = new Hero(req.body);
  await newHero.save();
  return res.status(201).send(newHero);
});

export { router as heroRouter };
