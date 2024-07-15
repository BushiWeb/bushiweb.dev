import pino from 'pino';
import { globalConfig } from './global.logger-config.js';

/**
 * Logger configurations for the development environment
 */
export const options = {
    ...globalConfig,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            customLevels: globalConfig.customLevels,
            customColors:
                'fatal:magenta,error:red,warning:yellow,notice:blue,info:green,http:cyan,debug:white,trace:gray',
        },
    },
};

export const destination = pino.destination(1);
