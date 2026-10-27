<script lang="ts">
  import { cart } from '$lib/cart.svelte';
  import { rupiah } from '$lib/format';
  import ProductArt from '$lib/components/ProductArt.svelte';
  let { data } = $props();
  const p = $derived(data.product);
  let picked = $state<string | null>(null);
  let qty = $state(1);
  let added = $state(false);
  const variant = $derived(p.variants.find((v) => v.name === picked) ?? p.variants[0]);
  const jsonLd = $derived(
    JSON.stringify({ '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: p.description, offers: { '@type': 'Offer', priceCurrency: 'IDR', price: variant.price } }).replace(/</g, '\\u003c')
  );

  function add() {
    cart.add(p, variant.name, qty);
    added = true;
    setTimeout(() => (added = false), 1500);
  }
</script>

<svelte:head>
  <title>{p.name} | ambatcha</title>
  <meta name="description" content={p.description} />
  <meta property="og:title" content="{p.name} | ambatcha" />
  <meta property="og:description" content={p.description} />
  {#if p.image}<meta property="og:image" content={p.image} />{/if}
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="wrap section grid items-start gap-6 md:grid-cols-2 md:gap-16 mt-14">
  <div class="relative border-[3px] border-ink px-16 py-6 shadow-[8px_8px_0_#101010] md:px-12 md:py-8" style:background-color={p.color + '55'}>
    {#if p.badge}<span class="sticker absolute top-4 left-4">{p.badge}</span>{/if}
    {#if p.image}<img src={p.image} alt={p.name} class="w-full" />{:else}<ProductArt color={p.color} />{/if}
  </div>

  <div class="flex flex-col gap-3.5">
    <a href="/#shop" class="underline">Back to shop</a>
    <h1 class="text-[clamp(2rem,5vw,3.2rem)]">{p.name}</h1>
    <p class="text-2xl font-black">{rupiah(variant.price)}</p>
    <p>{p.description}</p>

    <fieldset class="flex flex-wrap gap-2.5">
      <legend class="mb-1.5 font-bold">Size</legend>
      {#each p.variants as v}
        <label class="relative cursor-pointer border-[3px] border-ink px-4 py-2 font-bold has-focus-visible:outline-4 has-focus-visible:outline-matcha {v.name === variant.name ? 'bg-forest text-cream' : 'bg-white'}">
          <input class="absolute opacity-0" type="radio" name="variant" value={v.name} checked={v.name === variant.name} onchange={() => (picked = v.name)} />
          {v.name}
        </label>
      {/each}
    </fieldset>

    <div class="sticky bottom-0 z-2 flex gap-4 border-t-[3px] border-ink bg-cream py-3 md:static md:border-0 md:bg-transparent md:py-0">
      <div class="stepper">
        <button aria-label="Decrease quantity" onclick={() => (qty = Math.max(1, qty - 1))}>−</button>
        <span aria-live="polite">{qty}</span>
        <button aria-label="Increase quantity" onclick={() => (qty = Math.min(99, qty + 1))}>+</button>
      </div>
      <button class="btn flex-1 md:flex-none" onclick={add}>{added ? 'Added!' : 'Add to cart'}</button>
    </div>
    {#if added}<p class="animate-pop"><a href="/cart" class="font-bold underline">View cart and check out</a></p>{/if}

    <h2 class="mt-3 text-xl">Ingredients</h2>
    <p>{p.ingredients.join(', ')}</p>
    {#if p.serving}<h2 class="mt-3 text-xl">Serving</h2><p>{p.serving}</p>{/if}
  </div>
</div>
