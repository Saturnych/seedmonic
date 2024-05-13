<script lang="ts">
	import { dev } from '$app/environment';
	import Head from '$lib/components/Head.svelte';
	import Metrika from '$lib/components/Metrika.svelte';
	import Posthog from '$lib/components/Posthog.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import consts from '$lib/vars/consts';
	import './app.css';
</script>

<Head />

{#if !dev}
	<Metrika />
	<Posthog />
{/if}

<div class="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-2 px-8 pb-12 font-mono sm:pb-16">
	<main class="flex h-full flex-1 flex-col pt-[4vh] pb-6">
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>
