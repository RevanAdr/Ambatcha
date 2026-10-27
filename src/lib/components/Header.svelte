<script lang="ts">
  import { cart } from '$lib/cart.svelte';
  import { SHOP } from '$lib/config';
  let open = $state(false);
  const links = [['Home', '/'], ['Shop', '/#shop'], ['About', '/#about'], ['Contact', '/#contact']];
</script>

<header class="py-1.5 fixed w-full top-0 z-10 border-b-[6px] border-ink bg-cream hover:py-3 duration-200 ease-out">
  <div class="wrap flex min-h-16 items-center gap-4">
    <a href="/" class=" font-display mr-auto  text-2xl no-underline" onclick={() => (open = false)}>{SHOP.name}</a>
    <nav
      aria-label="Main"
      class="{open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b-[3px] border-ink bg-cream md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent"
    >
      {#each links as [label, href]}
        <a {href} onclick={() => (open = false)} class="border-t-2 border-ink px-5 py-4 font-bold md:border-0 md:p-0 md:hover:underline md:decoration-[3px]">{label}</a>
      {/each}
    </nav>
    <a href="/cart" aria-label="Cart, {cart.count} items" class="border-[3px] border-ink bg-matcha px-3 py-1.5 font-bold">
      Cart <b class="ml-1">{cart.count}</b>
    </a>
    <button
      class="flex size-11 cursor-pointer flex-col justify-between border-[3px] border-ink p-2 md:hidden"
      aria-expanded={open}
      aria-label="Menu"
      onclick={() => (open = !open)}
    >
      <span class="h-0.75 bg-ink"></span>
    </button>
  </div>
</header>
