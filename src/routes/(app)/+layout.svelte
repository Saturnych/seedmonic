<script lang="ts">
	import { dev } from '$app/environment';
	import Metrika from '$lib/components/Metrika.svelte';
	import Header from '$lib/components/Header.svelte';
	import consts from '$lib/vars/consts';
	import './styles.css';
</script>

{#if !dev}
	<Metrika />
{/if}

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p><nobr>&copy; 2024 <a href="{consts.homepage}">{consts.title}</a></nobr></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
