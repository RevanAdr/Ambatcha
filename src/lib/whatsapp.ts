import { SHOP } from './config';
import { rupiah } from './format';
import type { CartLine, Customer } from './types';

export function buildOrderMessage(lines: CartLine[], c: Customer): string {
  const total = lines.reduce((n, l) => n + l.qty * l.price, 0);
  const items = lines.map((l, i) => `${i + 1}. ${l.name} (${l.variant}) x${l.qty} @ ${rupiah(l.price)} = ${rupiah(l.qty * l.price)}`);
  return [
    `Hi ${SHOP.name}, I'd like to order:`, '', ...items, '', `Total: ${rupiah(total)}`, '',
    `Name: ${c.name}`, `Phone: ${c.phone}`, `Address: ${c.address}`, ...(c.notes ? [`Notes: ${c.notes}`] : [])
  ].join('\n');
}

export const whatsappUrl = (text: string) => `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
