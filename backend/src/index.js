import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
import { connectToDB } from './plugins/db.js';

dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors);
await app.register(connectToDB);

// Import routes here
// await app.register(import('./routes/user.routes.js'));

app.listen({ port: 3001 }, err => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});