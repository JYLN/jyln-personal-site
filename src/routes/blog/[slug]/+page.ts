import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/content/posts/${params.slug}.md`);

		const { title, date, readingTime } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date,
			readingTime
		};
	} catch (err) {
		throw error(404, { message: "Sorry, we couldn't find this post." });
	}
}
