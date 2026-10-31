import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://servixos.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/waitlist`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified: new Date(),
    },
  ];
}
