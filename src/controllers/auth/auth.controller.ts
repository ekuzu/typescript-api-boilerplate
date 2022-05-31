import { FastifyRequest, FastifyReply } from 'fastify'
import httpStatus from 'http-status'

const authLogin = (req: FastifyRequest, res: FastifyReply) => {
  res
    .send({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJpbmMgS3V6dSIsImVtYWlsIjoiZXJpbmNrdXp1QGdtYWlsLmNvbSJ9.fA0-IYgC1QYj7piruDUOCp_LAzKLMNKFHWNJFEYCeOo'
    })
    .status(httpStatus.OK)
}

const authMe = (req: FastifyRequest, res: FastifyReply) => {
  res.send({ name: 'Erinc Kuzu', email: 'erinckuzu@gmail.com' }).status(httpStatus.OK)
}

export { authLogin, authMe }
