import { MetadataRoute } from 'next';
import { courseDetails } from '@/lib/course-details';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.primezonecomputer.com";

  const staticPages = [
    '/',
    '/about',
    '/courses',
    '/courses/diploma',
    '/courses/short-term',
    '/contact',
    '/blog',
    '/certificates',
    '/career',
    '/refer-and-earn',
    '/gallery',
    '/student-projects',
    '/enroll',
    '/links'
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const coursePages = Object.keys(courseDetails).map((slug) => ({
    url: `${siteUrl}/courses/details/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...coursePages];
}
