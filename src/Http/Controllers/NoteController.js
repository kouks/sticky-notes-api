import Note from '@/Database/Models/Note'

export default {
  /**
   * Return the listing of the resource.
   *
   * @param {Object} req - The request bag.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  index (req, res) {
    Note.query()
      .where('url', req.query.url)
      .where('author', req.query.id)
      .then(notes => res.send(notes))
  },

  /**
   * Return the listing of the resource.
   *
   * @param {Object} req - The request bag.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  store (req, res) {
    Note.query()
      .insert(req.body)
      .then(() => res.sendStatus(201))
  }
}
