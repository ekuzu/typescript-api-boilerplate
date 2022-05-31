import { authLogin, authMe } from '../../controllers/auth/auth.controller'
import { FastifyInstance } from 'fastify'

let authRoutes = (fastify: FastifyInstance, opts: any, next: any) => {
  fastify.post(
    '/login',
    {
      schema: {
        body: {
          email: { type: 'string' },
          password: { type: 'string' }
        },
        response: {
          200: {
            type: 'object',
            properties: {
              token: { type: 'string' }
            }
          }
        }
      }
    },
    authLogin
  )
  fastify.get(
    '/me',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              email: { type: 'string' }
            }
          }
        }
      }
    },
    authMe
  )
  next()
}

export { authRoutes }
