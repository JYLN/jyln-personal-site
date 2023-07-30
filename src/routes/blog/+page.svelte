<script lang="ts">
	import BigButton from '$lib/components/BigButton.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Typer from '$lib/components/Typer.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog - Jaylen Baxter</title>
</svelte:head>

<section>
	<header>
		<BigButton href="/" colors={'from-orange-400 to-purple-600'}>
			<i class="bx bx-left-arrow-alt bx-fw" />
			<span>Go back home</span>
		</BigButton>

		<h2>Blog</h2>
		<p>Stories featuring my journey learning web development and other things technology!</p>
	</header>

	<aside>
		{#if data.posts.length > 0}
			{#each data.posts as post}
				<BlogCard {post} />
			{/each}
		{:else}
			<Typer
				element="p"
				words="No blog posts yet! Come back soon!"
				speed={90}
				tw_class="font-inter text-lg"
			/>
		{/if}
	</aside>
</section>

<style lang="postcss">
	section {
		@apply mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14;
	}

	header {
		@apply mb-10 border-b-2 border-zinc-600 lg:mb-14;
	}

	header h2 {
		@apply my-3 max-w-min bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text py-3 font-poppins text-7xl font-extrabold tracking-tight text-transparent;
	}

	header p {
		@apply my-4 text-zinc-900 dark:text-zinc-300;
	}

	aside {
		@apply grid gap-6 sm:grid-cols-2 lg:grid-cols-3;
	}
</style>
