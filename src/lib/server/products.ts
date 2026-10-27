// Data access layer. Pages only call these functions, never SQL.
import { pool } from './db';
import type { Product, Variant } from '$lib/types';

const COLS = 'id, slug, name, description, category, image, color, badge, ingredients, serving, variants';

function toProduct(r: Omit<Product, 'price'> & { variants: Variant[] }): Product {
  return { ...r, price: Math.min(...r.variants.map((v) => v.price)) };
}

export async function listProducts(): Promise<Product[]> {
  const { rows } = await pool.query(`SELECT ${COLS} FROM products WHERE active ORDER BY id`);
  return rows.map(toProduct);
}

export async function getProduct(slug: string): Promise<Product | null> {
  const { rows } = await pool.query(`SELECT ${COLS} FROM products WHERE active AND slug = $1`, [slug]);
  return rows[0] ? toProduct(rows[0]) : null;
}
