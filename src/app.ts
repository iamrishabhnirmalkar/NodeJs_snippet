import express, { Application } from 'express'
import path from 'path'
import router from './routes/apiRouter'

const app: Application = express()

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// Routes
app.use('/api/v1', router)

export default app
