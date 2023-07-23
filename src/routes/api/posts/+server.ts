import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export async function GET() {
	const allPosts = (await fetchMarkdownPosts()).filter((post) => post.meta.draft !== true);

	const sorted = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	const pinned = sorted.filter((post) => post.meta.tags.includes('pinned'));

	const allNonPinned = sorted.filter((post) => !post.meta.tags.includes('pinned'));

	return json({ pinned, allNonPinned });
}
