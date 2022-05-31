import * as dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export default {
  PORT: Number(process.env.PORT) || 3000
}
