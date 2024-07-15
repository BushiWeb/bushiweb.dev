import { Router, json } from 'express';
import { sendMail } from './contactForm-sendMail.action.js';

export const contactFormRouter = Router();

contactFormRouter.post('/contact', json(), sendMail);
