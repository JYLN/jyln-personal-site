<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.postcss';

	export let data;
</script>

<main class="h-screen">
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
</main>
