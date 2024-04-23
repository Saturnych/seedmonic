<script>
	import Counter from '$lib/components/Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
		<!-- Basic Circle using CSS `border-radius` Property -->
    <div class="circle-basic">
        Basic Circle
    </div>

    <!-- Circle with Text using CSS `border-radius` Property -->
    <div class="circle-text">
        Circle with Text
    </div>

		<div class="circle-simple">
        Simple Circle
    </div>

		<svg viewBox="0 0 80 80" width="80" height="80">
		  <circle class="circle" cx="40" cy="40" r="36" />
		</svg>

		<svg width="100" height="100">
		  <circle cx="50" cy="50" r="40" fill="#e74c3c" stroke="#3498db" stroke-width="3" />
		</svg>

    <!-- SVG Circle using SVG <circle> Element -->
    <svg class="svg-circle" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#3498db" />
    </svg>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.circle {
	  background: #456BD9;
	  border: 0.1875em solid #0F1C3F;
	  border-radius: 50%;
	  box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
	  height: 5em;
	  width: 5em;
	}

	/* CSS for creating a basic circle */
	.circle-basic {
	   width: 100px;
	   height: 100px;
	   background-color: #3498db;
	   border-radius: 50%; /* Makes the div a circle */
	   text-align: center;
	   line-height: 100px; /* Vertically centers text */
	   color: #fff;
	   font-size: 18px;
	   margin-bottom: 10px; /* Adds space between circles */
	}

	/* CSS for creating a circle with text inside using CSS border-radius */
	.circle-text {
	   width: 120px;
	   height: 120px;
	   background-color: #e74c3c;
	   border-radius: 50%;
	   text-align: center;
	   line-height: 120px; /* Vertically centers text */
	   color: #fff;
	   font-size: 18px;
	}

	.circle-simple {
	  background: #456BD9;
	  clip-path: circle(50%);
	  height: 5em;
	  width: 5em;
		text-align: center;
		line-height: 5em; /* Vertically centers text */
		color: #fff;
		font-size: 14px;
	}
</style>
