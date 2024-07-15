import pino from 'pino';
import { globalConfig } from './global.logger-config.js';

/**
 * Logger configurations for the production environment
 */
export const options = {
    ...globalConfig,
    formatters: {
        level: (label, number) => ({
            severity: label.toUpperCase(),
            level: number,
        }),
    },
    timestamp: pino.stdTimeFunctions.isoTime,
};

export const destination = pino.destination('./express/logs/log.json');
