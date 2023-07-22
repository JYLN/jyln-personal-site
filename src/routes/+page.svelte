<script lang="ts">
	import {
		BxlCss3,
		BxlGit,
		BxlGithub,
		BxlHtml5,
		BxlJavascript,
		BxlLinkedinSquare,
		BxlNodejs,
		BxlReact,
		BxlSass,
		BxlTailwindCss,
		BxlTypescript,
		BxsEdit
	} from 'svelte-boxicons';
</script>

<svelte:head>
	<title>Jaylen Baxter</title>
</svelte:head>

<section>
	<article>
		<h1>Hi, I'm Jaylen!</h1>
		<p>
			Just a small town guy, currently working as a network adminstrator and studying full-stack web
			development.
		</p>
		<aside>
			<a href="/blog">
				<span>
					<BxsEdit />
					<span>Blog</span>
				</span>
			</a>
			<a href="https://github.com/JYLN" target="_blank">
				<span>
					<BxlGithub />
					<span>Github</span>
				</span>
			</a>
			<a href="https://www.linkedin.com/in/jyln/" target="_blank">
				<span>
					<BxlLinkedinSquare />
					<span>LinkedIn</span>
				</span>
			</a>
		</aside>
	</article>
	<figure>
		<img src="/jaylen-bust.svg" alt="Cartoon Bust of Jaylen" />
	</figure>
</section>

<footer>
	<BxlHtml5 />
	<BxlCss3 />
	<BxlSass />
	<BxlTailwindCss />
	<BxlJavascript />
	<BxlTypescript />
	<BxlReact />
	<BxlNodejs />
	<BxlGit />
	<BxlGithub />
</footer>
