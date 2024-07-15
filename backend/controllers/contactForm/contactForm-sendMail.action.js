/**
 * Sends a mail to the developper.
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
export function sendMail(req, res) {
    res.status(200).send({ ok: 'ok' });
}
