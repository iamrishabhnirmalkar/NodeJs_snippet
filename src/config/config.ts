import DotenvFlow from 'dotenv-flow'

DotenvFlow.config()
// console.log(process.env)

export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVEL_URL: process.env.SERVEL_URL,
    DATABASE_URL: process.env.DATABASE_URL
}
