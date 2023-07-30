<script lang="ts">
	import type { PostResponse } from '$lib/utils/fetchMarkdownPosts';
	import { tooltip } from '$lib/utils/tooltip';

	export let post: PostResponse;
</script>

<div class="card-container">
	<div class="card-body">
		<h3>
			{#if post.meta.tags.includes('pinned')}
				<span class="ping-container" use:tooltip={{ content: 'Pinned' }}>
					<span class="ping-outer" />
					<span class="ping-inner" />
				</span>
			{/if}
			{post.meta.title}
		</h3>
		{#if post.meta.description}
			<p>{post.meta.description}</p>
		{/if}
		<a href="/blog/{post.path}">
			<span>Read more</span>
			<svg
				class="h-auto w-2.5"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</a>
	</div>
	<div class="card-footer">
		<p>Published {new Date(post.meta.date).toLocaleDateString()}</p>
	</div>
</div>

<style lang="postcss">
	.card-container {
		@apply flex flex-col rounded-xl border border-zinc-200 shadow-sm shadow-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-zinc-800/[.7];
	}

	.card-body {
		@apply p-4 md:p-5;
	}

	.card-body h3 {
		@apply inline-flex items-center gap-3 font-poppins text-xl font-bold tracking-tight;
	}

	.card-body p {
		@apply mt-2 font-inter;
	}

	.card-body a {
		@apply mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-all duration-300 ease-in-out hover:animate-gap hover:gap-4 hover:text-blue-700;
	}

	.card-footer {
		@apply rounded-b-xl border-t bg-zinc-200 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800 md:px-5 md:py-4;
	}

	.card-footer p {
		@apply font-inter text-sm text-zinc-500;
	}

	.ping-container {
		@apply relative flex h-3 w-3;
	}

	.ping-outer {
		@apply absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75;
	}

	.ping-inner {
		@apply relative h-3 w-3 rounded-full bg-emerald-500;
	}
</style>
