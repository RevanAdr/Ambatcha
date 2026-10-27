<script lang="ts">
  import { page } from '$app/state';
</script>

<section class="wrap section">
  <h1 class="text-5xl">{page.status}</h1>
  <p class="mt-2">{page.status === 404 ? 'That page does not exist.' : 'Something went wrong. Please try again in a moment.'}</p>
  <a class="btn mt-4" href="/">Back to home</a>
</section>
