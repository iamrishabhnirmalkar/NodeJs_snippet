import express, { Application } from 'express'
import path from 'path'
import router from './routes/apiRouter'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app: Application = express()

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// Routes
app.use('/api/v1', router)

//Global Error handler
app.use(globalErrorHandler)

export default app
