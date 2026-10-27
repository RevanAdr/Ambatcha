<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import { cart } from '$lib/cart.svelte';
  import { SHOP } from '$lib/config';
  let { children } = $props();
  onMount(() => cart.load());
</script>

<svelte:head>
  <title>{SHOP.name} | Matcha shop</title>
  <meta name="description" content="{SHOP.name}: matcha lattes, hojicha and flavored matcha drinks. Order straight on WhatsApp." />
  <meta property="og:site_name" content={SHOP.name} />
  <meta property="og:type" content="website" />
</svelte:head>

<Header />
<main>
  {@render children()}
</main>

<main class="overflow-hidden">
  <footer id="contact" class=" border-t-8 border-ink bg-forest py-18  flex flex-col h-fit text-cream">
    <div class="wrap">
      <p class="mb-1 font-display text-2xl">{SHOP.name}</p>
      <p>Orders are confirmed on WhatsApp. Rights deserved</p>
    </div>
  </footer>
</main>

