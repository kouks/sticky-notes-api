import Note from './Note'
import { Model } from 'objection'

export default class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      notes: {
        relation: Model.HasManyRelation,
        modelClass: Note,
        join: {
          from: 'users.id',
          to: 'notes.user_id'
        }
      }
    }
  }
}
