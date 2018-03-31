import app from './kernel'
// import { auth } from './middleware'
import NoteController from '@/Http/Controllers/NoteController'

/*
 |
 | All application routes are defined here.
 |
 */

app.get('/notes', NoteController.index)
app.post('/notes', NoteController.store)
