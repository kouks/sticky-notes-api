import knex from 'knex'
import config from 'config'
import { Model } from 'objection'

/*
|
| We boot up our database driver.
|
*/

Model.knex(knex(config.database))

/*
|
| We boot up the http server and define all routes.
|
*/

require('@/Http/routes')
