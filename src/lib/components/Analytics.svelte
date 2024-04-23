<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores'

	export let title: string;
	export let gtagId: string;

	onMount(async () => {
		if (!browser) return;
		title = title ?? document.title;
	});

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', gtagId, {
				page_title: title,
				page_path: $page.url.pathname,
			})
		}
	}
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id={gtagId}">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date());
    gtag('config', '{gtagId}');
  </script>
</svelte:head>
