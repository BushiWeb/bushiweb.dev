import { config } from '../../../config/config.js';

/**
 * Global logger configuration, for all environments
 */
export const globalConfig = {
    customLevels: config.get('logger.loggerLevels'),
    useOnlyCustomLevels: true,
    redact: config.get('logger.redact'),
    level: config.get('logger.level'),
};
