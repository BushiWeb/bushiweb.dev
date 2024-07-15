/**
 * Return the port value as a number.
 * @param {number | string} val - Port number, as a number or a string.
 * @returns Returns the port as a number.
 * @throws Throws an error if the parameter is neither a string nor an number.
 */
const normalizePort = (val) => {
    let port = val;

    if (typeof val === 'string') {
        port = parseInt(val, 10);
    }

    if (typeof port === 'number' && port >= 0) {
        return port;
    }

    throw new Error(
        'The port value must be a number greater than 0. It should be given as a number or a string.',
    );
};

export default normalizePort;
