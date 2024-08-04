import express, { Application, Request, Response, NextFunction } from 'express'
import path from 'path'
import router from './routes/apiRouter'
import globalErrorHandler from './middlewares/globalErrorHandler'
import responseMessage from './constants/responseMessage'
import httpError from './utils/httpError'
import helmet from 'helmet'

const app: Application = express()

// Middlewares
app.use(helmet())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

// Routes
app.use('/api/v1', router)

// 404 Error Handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (error) {
        httpError(next, error, req, 500)
    }
})

//Global Error Handler
app.use(globalErrorHandler)

export default app
