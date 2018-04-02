import dotenv from 'dotenv'
import { env } from '@/helpers'

dotenv.config()

export default {
  app: {
    port: env('APP_PORT')
  },

  database: {
    client: 'mysql',

    connection: {
      host: env('DB_HOST'),
      port: env('DB_PORT'),
      user: env('DB_USERNAME'),
      password: env('DB_PASSWORD'),
      database: env('DB_DATABASE')
    }
  }
}
