import pino from 'pino';
import { config } from '../../config/config.js';

const env = config.get('env');
const { options, destination } = await import(
    `./config/${env}.logger-config.js`
);
export const logger = pino(options, destination);
