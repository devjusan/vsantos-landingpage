import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const client = createClient();
  // const pages = await client.getAllByType("post");

  return [
    {
      url: "https://www.vsantostecnologia.com/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // {
    //   url: "https://www.vsantostecnologia.com/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 0.5,
    // },
    // ...pages.map(
    //   (page) =>
    //     ({
    //       url: `https://www.vsantostecnologia.com/blog/${page.uid}`,
    //       lastModified: new Date(page.last_publication_date),
    //       priority: 0.5,
    //     } as MetadataRoute.Sitemap[number])
    // ),
  ];
}
