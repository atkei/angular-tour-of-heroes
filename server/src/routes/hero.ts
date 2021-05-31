import Express, { Request, Response } from 'express';
import { Hero } from '../models/hero';

const router = Express.Router();

router.get('/heroes', async (req: Request, res: Response) => {
  const queryName = req.query.name;
  console.log(`queryName=${queryName}`);

  const conditions: any = {};
  if (queryName) {
    // https://docs.mongodb.com/manual/reference/operator/query/regex/
    const param: any = {};
    param['$regex'] = queryName;
    param['$options'] = 'i';
    conditions['name'] = param;
  }

  const heroes = await Hero.find(conditions);
  return res.status(200).send(heroes);
});

router.get('/heroes/:id', async (req: Request, res: Response) => {
  const hero = await Hero.findById(req.params.id);
  return res.status(200).send(hero);
});

router.post('/heroes', async (req: Request, res: Response) => {
  const newHero = new Hero(req.body);
  await newHero.save();
  return res.status(201).send(newHero);
});

export { router as heroRouter };
