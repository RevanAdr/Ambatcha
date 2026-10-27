export interface Variant { name: string; price: number }
export interface Product {
  id: number; slug: string; name: string; description: string; category: string;
  image: string | null; color: string; badge: string | null;
  ingredients: string[]; serving: string | null; variants: Variant[]; price: number; // price = lowest variant
}
export interface CartLine {
  key: string; slug: string; name: string; variant: string; price: number; color: string; qty: number;
}
export interface Customer { name: string; phone: string; address: string; notes: string }
