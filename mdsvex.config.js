import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import readingTime from 'mdsvex-reading-time';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: {
		_: './src/routes/blog/mdsvex.svelte'
	},

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkUnwrapImages, remarkGfm, readingTime],
	rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]]
});

export default config;
