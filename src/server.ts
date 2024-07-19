import config from './config/config'
import app from './app'
import logger from './utils/logger'

const server = app.listen(config.PORT)

;(() => {
    try {
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
