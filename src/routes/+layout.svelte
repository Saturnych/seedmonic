<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import Metrika from '$lib/components/Metrika.svelte';
	import Posthog from '$lib/components/Posthog.svelte';
	import Transition from '$lib/components/Transition.svelte';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import consts from '$lib/vars/consts';
	import '../app.css';

	let { children, data } = $props();
</script>

<Head />

{#if !dev}
	<Metrika />
	<Posthog />
{/if}

<div class="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-2 px-8 pb-12 font-mono sm:pb-16">
	<header>
		<Header />
	</header>

	<main class="flex h-full flex-1 flex-col pt-[4vh] pb-6">
		<Transition pathname={$page.url?.pathname || '/'}>
			{@render children()}
		</Transition>
	</main>

	<footer>
		<Footer />
	</footer>
</div>
