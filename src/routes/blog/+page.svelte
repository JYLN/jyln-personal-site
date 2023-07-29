<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import HeroButton from '$lib/components/HeroButton.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog - Jaylen Baxter</title>
</svelte:head>

<section>
	<header>
		<HeroButton href="/" colors={'from-orange-400 to-purple-600'}>
			<i class="bx bx-left-arrow-alt bx-fw" />
			<span>Go back home</span>
		</HeroButton>

		<h2>Blog</h2>
		<p>Stories featuring my journey learning web development and other things technology!</p>
	</header>

	<aside>
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</aside>
</section>

<style lang="postcss">
	section {
		@apply mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14;
	}

	header {
		@apply mx-auto mb-10 max-w-6xl border-b-2 border-zinc-600 lg:mb-14;
	}

	header h2 {
		@apply my-3 max-w-min bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text py-3 font-poppins text-5xl font-extrabold tracking-tight text-transparent;
	}

	header p {
		@apply my-3 text-zinc-400;
	}

	aside {
		@apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;
	}
</style>
