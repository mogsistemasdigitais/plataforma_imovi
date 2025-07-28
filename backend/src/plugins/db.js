import pg from 'pg';

const { Pool } = pg;

export async function connectToDB(app, opts) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  app.decorate('db', pool);
}