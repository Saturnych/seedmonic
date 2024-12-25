<script lang="ts">
	export let ordinal: number;
	export let word: string;
	export let highlighted: boolean = false;
	export let found: number = 2048;

	const getPows = (num: number): number[] => { // zero = 2046
		const base: number = 2;
		const pows: number[] = [];
		let summ: number = 0;
		for (let p=11;p>=0;p--) {
			const pow: number = Math.pow(base, p); // 2048- 1024+ 512+ 256+ 128+ 64+ 32+ 16+ 8+ 4+ 2+
			if ((summ+pow)>num) continue;	// 2048- 1024+ 1536+ 1792+ 1920+ 1984+ 2016+ 2032+ 2040+ 2044+ 2046+
			pows.push(pow); // 1024 512 256 128 64 32 16 8 4 2
			summ += pow; // 1024 1536 1792 1920 1984 2016 2032 2040 2044 2046
			if (summ===num) break; // 2046
		}
		return pows;
	};

	// {#if found<4}<div class="relative">{getPows(ordinal)}</div>{/if}

	$: paddedNumeral = ordinal.toString().padStart(4, '0');
	$: firstLetter = word?.at(0)?.toUpperCase();
</script>

<div class="">
	<div
		id={highlighted ? `${firstLetter}` : undefined}
		class="relative rounded-sm px-2 py-1 hover:bg-neutral-50/5"
		class:highlighted
		style={`--letter: '${firstLetter}'`}
	>
		<span class="numeral text-neutral-50/20">{paddedNumeral}</span>
		<span>{word}</span>
	</div>
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
