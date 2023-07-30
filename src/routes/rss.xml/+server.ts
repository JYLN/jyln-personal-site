import type { PostResponse } from '$lib/utils/fetchMarkdownPosts';

export async function GET({ fetch }) {
	const response = await fetch('/api/posts');
	const posts: PostResponse[] = await response.json();

	const headers = { 'Content-type': 'application/xml' };

	const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>Jaylen Baxter's Blog</title>
        <description>Stories featuring my journey learning web development and other things technology!</description>
        <link>https://jyln.dev/blog</link>
        <atom:link href="https://jyln.dev/rss.xml" rel="self" type="application/rss+xml" />
        ${posts
					.map(
						(post) => `
          <item>
            <title>${post.meta.title}</title>
            <description>${post.meta.description}</description>
            <link>https://jyln.dev/${post.path}</link>
            <guid isPermaLink="true">https://jyln.dev/${post.path}</guid>
            <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
          </item>
        `
					)
					.join('')}
      </channel>
    </rss>
  `.trim();

	return new Response(xml, { headers });
}
