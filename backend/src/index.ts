import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

async function start() {
  await app.register(cors)
  await app.register(appRoutes)

  app.listen({ port: 3333 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server running at ${address}`)
  })
}

start()
