import User from '@/Database/Models/User'

export default {
  /**
   * Return the listing of the resource.
   *
   * @param {Object} req - The request bag.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  index (req, res) {
    User.query().then(users => res.send(users))
  }
}