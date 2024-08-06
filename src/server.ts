import config from './config/config'
import app from './app'
import logger from './utils/logger'
import databaseService from './services/databaseService'
import { initRateLimiter } from './config/rateLimiter'

const server = app.listen(config.PORT)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    try {
        //DataBase Connection
        const connection = await databaseService.connect()
        logger.info(`DATABASE_CONNECTION_SUCCESS`, {
            meta: {
                CONNECTION_NAME: connection.name
            }
        })
        // Rate Limiter
        initRateLimiter(connection)
        logger.info(`RATE_LIMITER_INITIATED`)
        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVAL_URL: config.SERVEL_URL
            }
        })
    } catch (err) {
        logger.error(`APPLICATION_ERROR`, {
            meta: err
        })
        server.close((error) => {
            if (error) {
                logger.error(`APPLICATION_ERROR`, {
                    meta: err
                })
            }
            process.exit(1)
        })
    }
})()
