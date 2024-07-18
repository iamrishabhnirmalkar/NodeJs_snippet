import config from './config/config'
import app from './app'

const server = app.listen(config.PORT)

;(() => {
    try {
        console.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVAL_URL: config.SERVEL_URL
            }
        })
    } catch (err) {
        console.error(`APPLICATION_ERROR`, {
            meta: err
        })
        server.close((error) => {
            if (error) {
                console.error(`APPLICATION_ERROR`, {
                    meta: err
                })
            }
            process.exit(1)
        })
    }
})()
