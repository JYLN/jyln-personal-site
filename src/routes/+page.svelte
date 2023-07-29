<script lang="ts">
	import HeroButton from '$lib/components/HeroButton.svelte';
	import Typer from '$lib/components/Typer.svelte';
	import skills from '$lib/data/skills.json';
	import { tooltip } from '$lib/utils/tooltip';
</script>

<svelte:head>
	<title>Jaylen Baxter</title>
</svelte:head>

<section class="hero">
	<div class="max-w-full md:w-2/3">
		<Typer element="h1" tw_class="hero-text-header" words="Hi, I'm Jaylen!" speed={90} />
		<p class="hero-text-desc">
			Just a small town guy, currently working as a network administrator and studying full-stack
			web development.
		</p>
		<aside class="social-buttons">
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
	</div>
	<figure class="hero-img">
		<img src="/jaylen-bust.svg" alt="Cartoon Bust of Jaylen" />
	</figure>
</section>

<footer class="skill-footer">
	{#each skills as skill}
		{#if skill.name !== 'Svelte'}
			<i class="bx bxl-{skill.icon}" use:tooltip={{ content: skill.name }} />
		{:else}
			<i
				class="icon-{skill.icon} text-[1.65rem] md:text-[2.5rem]"
				use:tooltip={{ content: skill.name }}
			/>
		{/if}
	{/each}
</footer>

<style lang="postcss">
	.hero {
		@apply container mx-auto flex h-[90%] flex-col-reverse items-center justify-center gap-10 px-12 py-24 lg:flex-row lg:gap-6;
	}

	.hero-text-desc {
		@apply mt-4 text-base lg:text-xl;
	}

	.hero-img {
		@apply w-1/2 rounded-2xl bg-gradient-to-r from-amber-100 to-rose-300 p-6 drop-shadow-md md:w-1/3;
	}

	.social-buttons {
		@apply mt-9 flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:gap-5;
	}

	.skill-footer {
		@apply fixed bottom-0 flex h-[10%] w-full flex-wrap items-center justify-center gap-1 bg-gradient-to-r from-amber-100 to-rose-300 text-3xl text-zinc-900 sm:gap-2 md:gap-4 md:text-5xl;
	}
</style>
