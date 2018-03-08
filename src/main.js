import dotenv from 'dotenv'

/*
|
| We load environment variables from the env file.
|
*/

dotenv.config()

/*
|
| We boot up the http server and define all routes.
|
*/

require('@/Http/routes')
