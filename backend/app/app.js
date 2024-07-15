import express from 'express';
import { httpLogger } from '../services/logger/http-logger.js';

const app = express();

app.use(httpLogger);

export default app;
