import Express from 'express';
import * as Hero from '../models/hero';

export default {
  index: (req: Express.Request, res: Express.Response) => {
    const heroes = Hero.find();
    res.json(heroes);
  }
}
