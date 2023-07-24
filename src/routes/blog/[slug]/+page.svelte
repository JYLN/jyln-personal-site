<script lang="ts">
	import HeroButton from '$lib/components/HeroButton.svelte';

	export let data;
</script>

<article class="px-4 md:px-0">
	<HeroButton href="/blog" colors={'from-amber-400 to-rose-600'}>
		<i class="bx bx-left-arrow-alt" />
		<span>Go back to blog</span>
	</HeroButton>

	<header>
		<h1>{data.title}</h1>
		<p class="published">Published: {new Date(data.date).toLocaleDateString()}</p>
	</header>

	<svelte:component this={data.content} />
</article>

<style lang="postcss">
	article {
		@apply container mx-auto pt-6 font-inter;
	}

	header {
		@apply pt-12 pb-4 border-b-2 border-b-zinc-600 mb-10;
	}

	header h1 {
		@apply text-4xl font-poppins font-extrabold;
	}

	header p.published {
		@apply mt-3 font-jetmono text-zinc-400;
	}
</style>
