<script lang="ts">
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {new Date(data.date).toLocaleTimeString()}</p>
	<svelte:component this={data.content} />
</article>
