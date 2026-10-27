<script lang="ts">
  import type { Product } from '$lib/types';
  import { cart } from '$lib/cart.svelte';
  import { rupiah } from '$lib/format';
  import ProductArt from './ProductArt.svelte';
  let { product }: { product: Product } = $props();
  let added = $state(false);

  function add() {
    cart.add(product, product.variants[0].name);
    added = true;
    setTimeout(() => (added = false), 1200);
  }
</script>

<article class="flex flex-col border-[3px] border-ink bg-white shadow-ink-lg transition-transform hover:[@media(hover:hover)]:-translate-x-0.5 hover:[@media(hover:hover)]:-translate-y-0.5">
  <a
    href="/products/{product.slug}"
    aria-label="View {product.name}"
    class="relative block border-b-[3px] border-ink px-10 py-6"
    style:background-color={product.color + '55'}
  >
    {#if product.badge}<span class="sticker absolute top-2.5 left-2.5">{product.badge}</span>{/if}
    {#if product.image}
      <img src={product.image} alt={product.name} loading="lazy" class="aspect-[5/6] w-full object-cover" />
    {:else}
      <ProductArt color={product.color} />
    {/if}
  </a>
  <div class="flex flex-1 flex-col gap-1.5 p-4">
    <p class="text-sm font-bold text-forest">{product.category}</p>
    <h3 class="text-xl">{product.name}</h3>
    <p class="flex-1 text-[.95rem]">{product.description}</p>
    <p class="text-lg font-bold">{product.variants.length > 1 ? 'from ' : ''}{rupiah(product.price)}</p>
    <div class="mt-2 flex flex-wrap gap-2">
      <a class="btn btn-ghost flex-1 px-2.5" href="/products/{product.slug}">View product</a>
      <button class="btn flex-1 px-2.5" onclick={add}>{added ? 'Added!' : 'Add to cart'}</button>
    </div>
  </div>
</article>
