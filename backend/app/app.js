import express from 'express';
import { httpLogger } from '../services/logger/http-logger.js';
import { contactFormRouter } from '../controllers/contactForm/contactForm.router.js';

const app = express();

app.use(httpLogger);
app.use('/api/', contactFormRouter);

export default app;
