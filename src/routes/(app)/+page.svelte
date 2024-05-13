<script lang="ts">
	import SearchArea from '$lib/components/SearchArea.svelte';
	import consts from '$lib/vars/consts';

	let search: string = '';
	$: _search = search.toLowerCase().trim();

	const clearSearch = () => (search = '');
</script>

<div>
	<header class="mb-8">
		<div class="mt-6 flex flex-col items-start justify-between gap-8 sm:flex-row">
			<div>
				<h2 class="text-2xl">seedmonic</h2>
			</div>
			<SearchArea bind:value={search} />
		</div>
	</header>

</div>
