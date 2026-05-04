import type { MetadataRoute } from "next";
import { getGuideParams } from "@/src/content/guides";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://travel-check.info";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const params = await getGuideParams();

  return [
    { url: `${siteUrl}/`, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/guides`, changeFrequency: "daily", priority: 0.9 },
    ...params.map((entry) => ({
      url: `${siteUrl}/guides/${entry.type}/${entry.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
}
