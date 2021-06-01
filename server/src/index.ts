import Express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { heroRouter } from './routes/hero';

const allowedOrigins = ['http://localhost:4200'];  // TODO

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = Express();
app.use(cors(options));
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
