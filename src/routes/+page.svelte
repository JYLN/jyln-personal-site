<script lang="ts">
	import HeroButton from '$lib/components/HeroButton.svelte';
	import skills from '$lib/data/skills.json';
	import { tooltip } from '$lib/utils/tooltip';
</script>

<svelte:head>
	<title>Jaylen Baxter</title>
</svelte:head>

<section class="hero flex-col-reverse gap-10 lg:flex-row lg:gap-6">
	<article class="max-w-full md:w-2/3">
		<h1 class="hero-text-header text-5xl md:text-7xl">Hi, I'm Jaylen!</h1>
		<p class="hero-text-desc text-base lg:text-xl">
			Just a small town guy, currently working as a network administrator and studying full-stack
			web development.
		</p>
		<aside class="social-buttons flex-col gap-4 text-center lg:flex-row lg:items-center lg:gap-5">
			<HeroButton href="/blog" colors="from-emerald-400 to-blue-600">
				<i class="bx bxs-edit bx-fw" />
				<span>Blog</span>
			</HeroButton>
			<HeroButton href="https://github.com/JYLN" colors="from-orange-400 to-purple-600">
				<i class="bx bxl-github bx-fw" />
				<span>Github</span>
			</HeroButton>
			<HeroButton href="https://www.linkedin.com/in/jyln/" colors="from-amber-400 to-rose-600">
				<i class="bx bxl-linkedin-square bx-fw" />
				<span>LinkedIn</span>
			</HeroButton>
			<HeroButton href="" disabled={true}>
				<i class="bx bxs-report bx-fw" />
				<span>Portfolio</span>
			</HeroButton>
		</aside>
	</article>
	<figure class="hero-img w-1/2 md:w-1/3">
		<img src="/jaylen-bust.svg" alt="Cartoon Bust of Jaylen" />
	</figure>
</section>

<footer class="skill-footer text-3xl gap-2 md:text-5xl md:gap-4">
	{#each skills as skill}
		<i class="bx bxl-{skill.icon}" use:tooltip={{ content: skill.name }} />
	{/each}
</footer>

<style lang="postcss">
	.hero {
		@apply container mx-auto flex h-[90%] items-center justify-center py-24 px-12;
	}

	.hero-text-header {
		@apply bg-gradient-to-r from-amber-100 to-rose-300 bg-clip-text font-extrabold text-transparent font-poppins tracking-tight;
	}

	.hero-text-desc {
		@apply mt-4;
	}

	.hero-img {
		@apply rounded-2xl bg-gradient-to-r from-amber-100 to-rose-300 p-6 drop-shadow-md;
	}

	.social-buttons {
		@apply mt-9 flex;
	}

	.skill-footer {
		@apply fixed bottom-0 w-full h-[10%] flex justify-center items-center bg-gradient-to-r from-amber-100 to-rose-300 text-zinc-900;
	}
</style>
