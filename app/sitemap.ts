import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://luckybear-casino.example', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
