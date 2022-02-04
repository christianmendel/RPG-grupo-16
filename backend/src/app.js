import express from 'express';
import { mainRouter } from './routes/index.js';

const app = express();
app.use('/', mainRouter);

/*app.get('/', (req, res) => {
  res.send('teste');
});*/
app.listen(3333);
