import User from './User'
import { Model } from 'objection'

export default class Note extends Model {
  static get tableName () {
    return 'notes'
  }

  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'notes.user_id',
          to: 'users.id'
        }
      }
    }
  }
}
