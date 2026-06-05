import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.wannatutor.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 5,
    },
    {
      url: "https://www.wannatutor.in/find-tutor",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 4,
    },
    {
      url: "https://www.wannatutor.in/become-tutor",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 3,
    },
  ];
}
