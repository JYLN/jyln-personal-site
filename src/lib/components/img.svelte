<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<figure>
	<img {src} {alt} loading="lazy" />
	<figcaption>{alt}</figcaption>
</figure>
