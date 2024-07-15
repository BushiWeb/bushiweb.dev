import http from 'node:http';
import app from '../app/app.js';
import getConnectionInformations from './getConnectionInformations.js';
import { config } from '../config/config.js';
import normalizePort from './normalizePort.js';
import { logger as parentLogger } from '../services/logger/logger.js';
import process from 'node:process';
import { setTimeout } from 'node:timers';

const logger = parentLogger.child({}, { msgPrefix: '[backendTest:server] ' });

// Get the application port
let port;
try {
    port = normalizePort(config.get('port'));
} catch (err) {
    port = 3000;
    logger.error(err);
    logger.warn(
        `The port number can't be used as is neither can it be coerced, using port ${port} by default instead.`,
    );
}

app.set('port', port);
logger.trace(`Port number: ${port}`);

// Create the server
const server = http.createServer(app);
logger.trace('Server created');

// Server's event listeners
server.on('error', (err) => {
    logger.fatal(err.message);
    process.exit(1);
});
server.on('listening', () => {
    const connectionInformations = getConnectionInformations(server, port);
    logger.info(`Server listening on ${connectionInformations}`);
});

// Logging uncaught exceptions and unhandled promise rejections
process.on('uncaughtException', (err) => {
    logger.fatal(err, 'Uncaught exception detected');
    server.close(() => {
        process.exit(1);
    });

    setTimeout(() => {
        process.abort();
    }, 1000).unref();

    process.exit(1);
});

/**
 * Starts the server.
 */
const startServer = () => {
    server.listen(port);
    logger.trace('Server started');
};

export default startServer;
