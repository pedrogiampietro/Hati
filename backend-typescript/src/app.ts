import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import { errorHandler } from './shared/errors/handler';

import { routes } from './routes';

const app = express();

app.use(errorHandler);
app.use(express.json());
app.use(routes);

export { app };
