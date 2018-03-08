import app from './kernel'

/*
 * All application routes are defined here.
 */

app.get('/', (req, res) => {
  res.send('Hello World!')
})
