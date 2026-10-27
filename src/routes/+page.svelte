<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  import ProductArt from '$lib/components/ProductArt.svelte';
  import { SHOP } from '$lib/config';
  let { data } = $props();
</script>

<svelte:head><title>{SHOP.name} | Matcha, drawn in bold ink</title></svelte:head>

<main class="h-fit overflow-hidden flex flex-col">
  <section class="border-t-ink bg-matcha mt-18">
    <div class="wrap grid items-center gap-8 py-9 md:grid-cols-[1.1fr_.9fr] md:py-20">
      <div>
        <h1 class="mb-4 text-[clamp(2.0rem,5vw,4.2rem)]">MATCHA</h1>
        <h1 class="mb-4 text-[clamp(1.5rem,4.5vw,2.5rem)]">DRAWN IN BOLD INK</h1>
        <p class="max-w-[36ch] text-lg">Matcha lattes and another matcha variant. Pick your cup, then send your order straight to us on WhatsApp.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a class="btn btn-dark" href="#shop">Shop matcha</a>
          <a class="btn btn-ghost" href="/cart">My cart</a>
        </div>
      </div>
      <div class="relative w-full max-w-60 justify-self-center pt-16 md:max-w-85">
        <div class="bubble absolute top-0 -left-4 z-1 max-w-48 -rotate-3 animate-pop">Freshly whisked!</div>
        <ProductArt color="#8DB84A" />
        <span class="sticker absolute right-0 bottom-[22%] rotate-8 text-2xl">NEW</span>
      </div>
    </div>
  </section>
  
  
  <section id="shop" class="wrap section border-t-8 h-fit rotate-2 bg-cream -mt-8 w-full scale-103">
    <div class="-rotate-2 px-10">
      <h2 class="text-3xl md:text-4xl">Pick your matcha</h2>
      <div class="mt-8 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8" >
        {#each data.products as product (product.id)}<ProductCard {product} />{/each}
      </div>
    </div>
  </section>
  
  
  <section id="about" class="halftone border-y-8 translate-y-9 pb-6 scale-101 border-ink bg-white flex flex-col -ml-3 -rotate-2 relative z-10">
    <div class="wrap section grid items-start gap-8 md:grid-cols-2 rotate-2">
      <h2 class="text-3xl md:text-4xl">One cup, one chapter.</h2>
      <p>{SHOP.name} whisks every drink to order with real matcha. Every cup lists what is inside, nothing hidden.</p>
    </div>
  </section>
</main>
