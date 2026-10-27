<script lang="ts">
  import { cart } from '$lib/cart.svelte';
  import { rupiah } from '$lib/format';
  import { buildOrderMessage, whatsappUrl } from '$lib/whatsapp';
  import type { Customer } from '$lib/types';

  let customer = $state<Customer>({ name: '', phone: '', address: '', notes: '' });

  function order(e: SubmitEvent) {
    e.preventDefault();
    if (!cart.lines.length) return;
    window.open(whatsappUrl(buildOrderMessage(cart.lines, customer)), '_blank', 'noopener');
  }
</script>

<svelte:head><title>Your cart | ambatcha</title><meta name="robots" content="noindex" /></svelte:head>

<div class="wrap section mt-14">
  <h1 class="mb-6 text-[clamp(2rem,5vw,3rem)]">Your cart</h1>

  {#if cart.lines.length === 0}
    <div class="grid animate-pop justify-items-start gap-6 pt-4">
      <p class="bubble">Nothing here yet!</p>
      <p>Your cart is empty. Pick a matcha to get started.</p>
      <a class="btn" href="/#shop">Browse matcha</a>
    </div>
  {:else}
    <div class="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
      <ul class="m-0 list-none border-[3px] border-ink bg-white p-0">
        {#each cart.lines as l (l.key)}
          <li class="flex flex-wrap items-center gap-x-4 gap-y-2 border-b-2 border-ink p-4">
            <span class="size-6 rounded-full border-[3px] border-ink" style:background={l.color}></span>
            <div class="grid min-w-36 flex-1">
              <a href="/products/{l.slug}" class="font-bold">{l.name}</a>
              <span class="opacity-75">{l.variant} · {rupiah(l.price)}</span>
            </div>
            <div class="stepper">
              <button aria-label="Decrease {l.name}" onclick={() => cart.setQty(l.key, l.qty - 1)}>−</button>
              <span>{l.qty}</span>
              <button aria-label="Increase {l.name}" onclick={() => cart.setQty(l.key, l.qty + 1)}>+</button>
            </div>
            <b class="min-w-28 text-right">{rupiah(l.qty * l.price)}</b>
            <button class="cursor-pointer underline" onclick={() => cart.remove(l.key)} aria-label="Remove {l.name}">Remove</button>
          </li>
        {/each}
        <li class="flex justify-between bg-matcha text-xl"><span>Total</span><b>{rupiah(cart.subtotal)}</b></li>
        <li class="flex justify-between border-0">
          <a href="/#shop" class="underline">Continue shopping</a>
          <button class="cursor-pointer underline" onclick={() => cart.clear()}>Clear cart</button>
        </li>
      </ul>

      <form onsubmit={order} class="grid gap-4 border-[3px] border-ink bg-white p-5 shadow-ink-lg">
        <h2 class="text-2xl">Delivery details</h2>
        <label class="field">Name <input required autocomplete="name" bind:value={customer.name} /></label>
        <label class="field">Phone <input required type="tel" autocomplete="tel" bind:value={customer.phone} /></label>
        <label class="field">Address <textarea required rows="3" autocomplete="street-address" bind:value={customer.address}></textarea></label>
        <label class="field">Notes (sweetness, ice, etc.) <textarea rows="2" bind:value={customer.notes}></textarea></label>
        <button class="btn btn-dark" type="submit">Order via WhatsApp</button>
        <p class="opacity-75">Opens WhatsApp with your order filled in. We confirm price and shipping there.</p>
      </form>
    </div>
  {/if}
</div>
