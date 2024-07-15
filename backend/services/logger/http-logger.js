import pinoHttp from 'pino-http';
import { logger } from './logger.js';

export const httpLogger = pinoHttp({
    logger,
    customLogLevel: (req, res) => {
        if (res.statusCode >= 500) {
            return 'error';
        }
        if (res.statusCode >= 400) {
            return 'warn';
        }
        return 'http';
    },
});
