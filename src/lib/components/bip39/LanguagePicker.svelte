<script lang="ts">
	import type { Lang } from '$lib/types';

	export let wordSets: Record<Lang, string[]>;
	export let lang: Lang = 'en';

	$: languages = Object.keys(wordSets).sort() as Lang[];
</script>

<div class="flex flex-wrap items-center justify-end gap-1 text-neutral-50/20">
	{#each languages as $lang}
		<button
			aria-label="Set language to {$lang}"
			on:click={() => (lang = $lang)}
			class:!text-neutral-300={lang === $lang}
			class="rounded-md p-1 ring-orange-500 hover:text-neutral-500 focus:outline-none focus-visible:text-neutral-400 focus-visible:ring-2"
		>
			{$lang}
		</button>
	{/each}
</div>
