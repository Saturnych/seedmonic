<script lang="ts">
	import { normalize } from '$lib/utils';
	import Icon from '@iconify/svelte';

	export let value = '';
	export let classes = '';
	export let name = '';
	export let placeholder = 'paste seed phrase';

	$: hasValue = !!normalize(value.trim())?.length;
</script>

<div
	class="relative flex w-full items-center rounded-sm bg-neutral-800/60 px-3 pr-7 ring-orange-500 focus-within:ring-2 focus-visible:outline-none focus-visible:ring-2 sm:w-fit"
>
	<button>
		<Icon icon="ic:sharp-search" class="text-xl text-neutral-600" />
	</button>
	<textarea
		rows="4"
		cols="50"
		aria-label="{placeholder}"
		bind:value
		class={`w-full bg-transparent py-2 px-3 placeholder:text-neutral-600 focus:outline-none focus-visible:outline-none ${classes}`}
		{placeholder}
		{name}
	/>
	{#if hasValue}
		<button
			on:click={() => (value = '')}
			class="absolute top-[50%] right-3 flex translate-y-[-50%] items-center justify-center text-xl text-neutral-600 hover:text-neutral-500 focus:outline-none"
		>
			<Icon icon="ic:sharp-clear" />
		</button>
	{/if}
</div>
