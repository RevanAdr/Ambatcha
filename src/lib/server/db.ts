import pg from 'pg';
import { env } from '$env/dynamic/private';
export const pool = new pg.Pool({ connectionString: env.DATABASE_URL });
