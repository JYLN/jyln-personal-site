<script lang="ts">
	import type { PostResponse } from '$lib/utils/fetchMarkdownPosts';
	import { tooltip } from '$lib/utils/tooltip';

	export let post: PostResponse;
</script>

<div
	class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700"
>
	<h5
		class="mb-2 text-2xl font-bold font-inter tracking-tight inline-flex items-center gap-2 text-gray-900 dark:text-white"
	>
		{#if post.meta.tags.includes('pinned')}
			<span class="flex h-3 w-3 relative" use:tooltip={{ content: 'Pinned' }}>
				<span
					class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
				/>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
			</span>
		{/if}
		{post.meta.title}
	</h5>
	<p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
		{new Date(post.meta.date).toLocaleDateString()}
	</p>
	<p class="mb-3 text-md font-normal text-gray-700 dark:text-gray-400">
		{post.meta.description}
	</p>
	<a
		href="/blog/{post.path}"
		class="inline-flex items-center px-3 py-2 text-sm font-medium text-center transition text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:scale-90 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
	>
		Read more
		<svg
			class="w-3.5 h-3.5 ml-2"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 10"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 5h12m0 0L9 1m4 4L9 9"
			/>
		</svg>
	</a>
</div>
