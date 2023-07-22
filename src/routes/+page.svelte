<script lang="ts">
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';

	function tooltip(node: HTMLUnknownElement, options: Object) {
		const tooltip = tippy(node, options);

		return {
			destroy() {
				tooltip.destroy();
			}
		};
	}
</script>

<svelte:head>
	<title>Jaylen Baxter</title>
</svelte:head>

<section class="hero flex-col-reverse gap-10 lg:flex-row lg:gap-6">
	<article class="max-w-full md:w-2/3">
		<h1 class="hero-text-header text-5xl md:text-7xl lg:text-8xl">Hi, I'm Jaylen!</h1>
		<p class="hero-text-desc text-base lg:text-xl">
			Just a small town guy, currently working as a network administrator and studying full-stack
			web development.
		</p>
		<aside class="social-buttons flex-col gap-4 text-center lg:flex-row lg:items-center lg:gap-5">
			<a
				href="/blog"
				class="social-button group from-emerald-400 to-blue-600 group-hover:from-emerald-400 group-hover:to-blue-600"
			>
				<span class="social-button-text">
					<i class="bx bxs-edit bx-fw" />
					<span>Blog</span>
				</span>
			</a>
			<a
				href="https://github.com/JYLN"
				target="_blank"
				class="social-button group from-orange-400 to-purple-600 group-hover:from-orange-400 group-hover:to-purple-600"
			>
				<span class="social-button-text">
					<i class="bx bxl-github bx-fw" />
					<span>Github</span>
				</span>
			</a>
			<a
				href="https://www.linkedin.com/in/jyln/"
				target="_blank"
				class="social-button group from-amber-400 to-rose-600 group-hover:from-amber-400 group-hover:to-rose-600"
			>
				<span class="social-button-text">
					<i class="bx bxl-linkedin-square bx-fw" />
					<span>LinkedIn</span>
				</span>
			</a>
		</aside>
	</article>
	<figure class="hero-img w-1/2 md:w-1/3">
		<img src="/jaylen-bust.svg" alt="Cartoon Bust of Jaylen" />
	</figure>
</section>

<footer class="skill-footer text-3xl gap-2 md:text-5xl md:gap-4">
	<i class="bx bxl-html5" use:tooltip={{ content: 'HTML' }} />
	<i class="bx bxl-css3" use:tooltip={{ content: 'CSS' }} />
	<i class="bx bxl-sass" use:tooltip={{ content: 'Sass' }} />
	<i class="bx bxl-tailwind-css" use:tooltip={{ content: 'TailwindCSS' }} />
	<i class="bx bxl-javascript" use:tooltip={{ content: 'JavaScript' }} />
	<i class="bx bxl-typescript" use:tooltip={{ content: 'TypeScript' }} />
	<i class="bx bxl-react" use:tooltip={{ content: 'React' }} />
	<i class="bx bxl-nodejs" use:tooltip={{ content: 'Node.JS' }} />
	<i class="bx bxl-git" use:tooltip={{ content: 'Git' }} />
	<i class="bx bxl-github" use:tooltip={{ content: 'Github' }} />
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
