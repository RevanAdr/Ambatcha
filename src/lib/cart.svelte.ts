import type { CartLine, Product } from './types';
const KEY = 'ambatcha-cart';

class Cart {
  lines = $state<CartLine[]>([]);
  count = $derived(this.lines.reduce((n, l) => n + l.qty, 0));
  subtotal = $derived(this.lines.reduce((n, l) => n + l.qty * l.price, 0));

  load() {
    try { this.lines = JSON.parse(localStorage.getItem(KEY) ?? '[]'); } catch { this.lines = []; }
  }
  private save() {
    try { localStorage.setItem(KEY, JSON.stringify(this.lines)); } catch { /* storage unavailable */ }
  }
  add(p: Product, variantName: string, qty = 1) {
    const v = p.variants.find((x) => x.name === variantName) ?? p.variants[0];
    const key = `${p.slug}:${v.name}`;
    const line = this.lines.find((l) => l.key === key);
    if (line) line.qty += qty;
    else this.lines.push({ key, slug: p.slug, name: p.name, variant: v.name, price: v.price, color: p.color, qty });
    this.save();
  }
  setQty(key: string, qty: number) {
    if (qty < 1) return this.remove(key);
    const line = this.lines.find((l) => l.key === key);
    if (line) line.qty = Math.min(qty, 99);
    this.save();
  }
  remove(key: string) { this.lines = this.lines.filter((l) => l.key !== key); this.save(); }
  clear() { this.lines = []; this.save(); }
}
export const cart = new Cart();
