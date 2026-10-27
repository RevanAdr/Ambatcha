import { error } from '@sveltejs/kit';
import { getProduct } from '$lib/server/products';
export const load = async ({ params }) => {
  const product = await getProduct(params.slug);
  if (!product) error(404, 'Product not found');
  return { product };
};
