import { FastifyInstance } from 'fastify'
import { authRoutes } from './auth.routes'

let loadRoutes = (fastify: FastifyInstance) => {
  fastify.register(authRoutes, { prefix: '/v1/auth' })
}

export { loadRoutes }
