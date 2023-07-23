interface PostMetadata {
	metadata: {
		title: string;
		description: string;
		date: string;
		preview: string;
		draft: boolean;
		tags: string[];
		categories: string[];
		slug?: string;
	};
}

export interface PostResponse {
	meta: {
		title: string;
		description: string;
		date: string;
		preview: string;
		draft: boolean;
		tags: string[];
		categories: string[];
		slug?: string;
	};
	path: string;
}

export async function fetchMarkdownPosts() {
	const allPostFiles = import.meta.glob<PostMetadata>('$lib/content/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(23, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
}
