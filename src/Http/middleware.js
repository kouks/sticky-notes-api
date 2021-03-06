import User from '@/Database/Models/User'

/**
 * The authentication middleware.
 *
 * @param {Object} req - The request bag.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware pointer.
 * @returns {void}
 */
export const auth = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    return res.status(401).send({ error: 'Invalid API Token.' })
  }

  User.query().where('api_token', req.headers.authorization.split(' ')[1]).first()
    .then((user) => {
      req.user = user

      return user === undefined
        ? res.status(401).send({ error: 'Invalid API Token.' })
        : next()
    })
}
