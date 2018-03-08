import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'

/*
|
| We boot up an express server instance.
|
*/

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.server = http.createServer(app)
app.server.listen(1337)

export default app