
import { MetadataRoute } from 'next';
import { courseDetails } from '@/lib/course-details';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.primezonecomputer.com';

  const staticRoutes = [
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
    '/links',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const courseSlugs = Object.keys(courseDetails);
  const dynamicCourseRoutes = courseSlugs.map((slug) => ({
    url: `${baseUrl}/courses/details/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicCourseRoutes];
}
