import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export async function GET() {
	const allPosts = (await fetchMarkdownPosts()).filter((post) => post.meta.draft !== true);

	const sortedPosts = allPosts.sort((a, b) => {
		const aPinned = a.meta.tags.includes('pinned');
		const bPinned = b.meta.tags.includes('pinned');

		if (aPinned && bPinned) {
			return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
		}

		if (!aPinned && !bPinned) {
			return new Date(a.meta.date).getTime() < new Date(b.meta.date).getTime() ? -1 : 1;
		}

		return aPinned ? -1 : 1;
	});

	return json(sortedPosts);
}
