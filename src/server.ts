import { fastify, FastifyInstance, FastifyRequest } from 'fastify'
import config from './config'
import pino from 'pino'
import { loadRoutes } from './routes/v1'

const server = fastify({
  logger: pino({ level: 'info' })
})

server.register(require('@fastify/cors'), instance => {
  return (req: FastifyRequest, callback: Function) => {
    const corsOptions = {
      origin: true
    }

    if (/^localhost$/m.test(req.headers.origin || '')) {
      corsOptions.origin = false
    }

    callback(null, corsOptions)
  }
})

loadRoutes(server)

const start = async () => {
  try {
    await server.listen(config.PORT)
    console.info(`Server started successfully on ${config.PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
