<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<svelte:head>
	<title>Blog - Jaylen Baxter</title>
</svelte:head>

<section>
	<header class="px-4 py-6 border-b-[1px] md:px-0">
		<h1
			class="bg-gradient-to-r leading-normal from-emerald-400 to-blue-600 max-w-md text-transparent bg-clip-text text-7xl font-poppins font-extrabold tracking-tight"
		>
			Blog
		</h1>
		<p>
			Just a small blog featuring my adventures learning web development and other things
			technology!
		</p>
	</header>

	<aside
		class="py-12 grid grid-cols-1 gap-3 auto-rows-auto justify-items-center md:grid-cols-2 xl:grid-cols-4"
	>
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</aside>
</section>

<style lang="postcss">
	section {
		@apply container mx-auto pt-6;
	}

	header p {
		@apply mt-2;
	}
</style>
