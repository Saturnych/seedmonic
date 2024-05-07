<script lang="ts">
	export let ordinal: number;
	export let word: string;
	export let highlighted: boolean = false;

	$: paddedNumeral = ordinal.toString().padStart(4, '0');
	$: firstLetter = word?.at(0)?.toUpperCase();
</script>

<div 
	id={highlighted ? `${firstLetter}` : undefined}
	class="relative rounded-sm px-2 py-1 hover:bg-neutral-50/5"
	class:highlighted
	style={`--letter: '${firstLetter}'`}
>
	<span class="numeral text-neutral-50/20">{paddedNumeral}</span>
	<span>{word}</span>
</div>

<style>
	.highlighted {
		--letter: 'A';
		@apply bg-orange-400/10;
		color: var(--hg-color);
	}

	.highlighted .numeral {
		@apply text-orange-400/40;
	}

	.highlighted:hover {
		@apply bg-neutral-50/5;
	}

	.highlighted::before {
		content: var(--letter);
		@apply absolute left-[-20px] font-semibold text-orange-500;
	}
</style>
