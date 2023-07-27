<script lang="ts">
	import HeroButton from '$lib/components/HeroButton.svelte';

	export let data;
</script>

<!-- <article class="px-4 md:px-0">
	<HeroButton href="/blog" colors={'from-amber-400 to-rose-600'}>
		<i class="bx bx-left-arrow-alt" />
		<span>Go back to blog</span>
	</HeroButton>

	<header>
		<h1>{data.title}</h1>
		<p class="published">Published: {new Date(data.date).toLocaleDateString()}</p>
	</header>

	<svelte:component this={data.content} />
</article> -->

<article>
	<div class="max-w-2xl">
		<!-- Blog Nav -->
		<nav>
			<HeroButton href="/blog" colors={'from-amber-400 to-rose-600'}>
				<i class="bx bx-left-arrow-alt bx-fw" />
				<span>Go back to blog</span>
			</HeroButton>

			<ul>
				<li>
					{new Date(data.date).toLocaleDateString()}
				</li>
				<li>{data.readingTime.text}</li>
			</ul>
		</nav>

		<!-- Content -->
		<section class="font-inter">
			<h2>
				{data.title}
			</h2>

			<div class="prose">
				<svelte:component this={data.content} class="content" />
			</div>
		</section>
		<!-- End Content -->
	</div>
</article>

<style lang="postcss">
	article {
		@apply mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10;
	}

	nav {
		@apply mb-8 flex flex-col items-center justify-between sm:flex-row;
	}

	nav ul {
		@apply mt-2 flex text-sm text-zinc-400 sm:mt-0;
	}

	nav ul li {
		@apply relative pl-4 pr-4 after:absolute after:-right-0.5 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-zinc-500 first:pl-0 last:pr-0 last-of-type:after:hidden;
	}

	section {
		@apply space-y-6;
	}

	section h2 {
		@apply text-2xl font-extrabold md:text-3xl;
	}
</style>
