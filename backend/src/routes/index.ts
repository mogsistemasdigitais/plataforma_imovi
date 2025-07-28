import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.get('/ping', async () => {
    return { message: 'pong' }
  })
}
