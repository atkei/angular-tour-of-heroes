import Express, { json } from 'express';
import mongoose from 'mongoose';
import { heroRouter } from './routes/hero';

const app = Express();
app.use(json());
app.use(heroRouter);

mongoose.connect('mongodb://admin:admin@localhost:27017/hero_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(_ => {
  console.log('Connected to Mongo DB.');
}).catch(err => {
  console.log(err);
});

app.listen(3000, () => {
  console.log(`Running server.`);
});
