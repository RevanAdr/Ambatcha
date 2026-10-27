import { listProducts } from '$lib/server/products';
export const load = async () => ({ products: await listProducts() });
