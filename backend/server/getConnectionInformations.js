/**
 * Created the bind information string.
 * @param {http.Server} server - Server instance to create the bind for.
 * @param {number} port - Port number the server is trying to connect to.
 * @returns Returns the port or the adress.
 */
const getConnectionInformations = (server, port) => {
    const address = server.address();

    return (
        address === null ? `port: ${port}`
        : typeof address === 'string' ? `pipe ${address}`
        : `port: ${address.port}, ${address.family} address: '${address.address}'`
    );
};

export default getConnectionInformations;
