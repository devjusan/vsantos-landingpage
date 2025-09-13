import { createClient } from "@/prismicio";

export async function GET(request: Request) {
  const client = createClient();
  const pages = await client.getAllByType("post");

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>VSantos Tecnologia | Blog</title>
            <link>https://www.vsantostecnologia.com/</link>
            <description>A VSantos ajuda startups e empresas a transformar ideias em produtos digitais funcionais, prontos para validar o mercado e conquistar investidores.</description>
            <language>pt-br</language>
            ${pages
              .map(
                (post) => `
            <item>
                <title>${post.data.meta_title}</title>
                <link>${`https://www.vsantostecnologia.com/blog/${post.uid}`}</link>
                <description>${post.data.meta_description}</description>
                <pubDate>${post.last_publication_date}</pubDate>
            </item>
            `
              )
              .join("")}
        </channel>
    </rss>`;

  return new Response(feed, {
    status: 200,
    headers: { "Content-Type": "application/rss+xml" },
  });
}
