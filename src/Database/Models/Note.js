import { Model } from 'objection'

export default class Note extends Model {
  static get tableName () {
    return 'notes'
  }
}
