<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';
	import consts from '$lib/vars/consts';

	let y: number = 0;
	let height: number = 0;

	$: scrollToTopShown = y > height * 0.3;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

{#if scrollToTopShown}
	<div in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>
		<ScrollToTopButton />
	</div>
{/if}

<div class="mt-12 px-1">
	<a href="{consts.repo}" target="_blank" class="flex items-center gap-2 text-neutral-50/20 hover:underline">source&nbsp;<Icon icon="ic:sharp-arrow-outward" /></a>
</div>

<div class="mt-auto">
	<div class="flex flex-col items-center justify-center gap-8 py-4">
		<a href="{consts.homepage}" title="{consts.title}"><Icon icon="ic:sharp-currency-bitcoin" class="text-3xl text-orange-500" /></a>
	</div>
</div>
