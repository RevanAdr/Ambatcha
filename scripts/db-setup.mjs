// Runs every db/*.sql file in order against DATABASE_URL.
//   npm run db:setup  -> create table if missing, upsert sample products
//   npm run db:reset  -> DROP the products table first (deletes ALL products, dev only)
import pg from 'pg';
import { readdirSync, readFileSync } from 'node:fs';

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
if (process.argv.includes('--reset')) {
  await client.query('DROP TABLE IF EXISTS products');
  console.log('dropped products');
}
for (const f of readdirSync('db').filter((f) => f.endsWith('.sql')).sort()) {
  await client.query(readFileSync(`db/${f}`, 'utf8'));
  console.log('ran', f);
}
await client.end();
