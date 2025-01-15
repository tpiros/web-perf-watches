import express from 'express';
import compression from 'http-compression';
import { delay, brotli } from './config.js';
import { resolve } from 'node:path';
import api from './api/index.js';

const __dirname = import.meta.dirname;

const app = express();
app.use((_req, _res, next) => {
  setTimeout(next, delay);
});

app.use(
  compression({
    brotli: brotli,
  })
);

app.use('/api', api);

app.use(
  express.static(resolve(__dirname, '..', 'public'), {
    extensions: ['html'],
  })
);

export default app;
