<script lang="ts">
	import Icon from '@iconify/svelte';

	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};
</script>

<div class="fixed bottom-8 right-8">
	<div class="rounded-full bg-neutral-900">
		<button
			on:click={scrollToTop}
			class="z-100 rounded-full bg-orange-400/20 p-2 text-red-500 shadow ring-orange-500 transition hover:bg-orange-400/25 focus:outline-none focus-visible:outline-none focus-visible:ring-2 active:scale-95"
		>
			<Icon icon="mdi:chevron-up" class="text-4xl text-orange-400" />
		</button>
	</div>
</div>
