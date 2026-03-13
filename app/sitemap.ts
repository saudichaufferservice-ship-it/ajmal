import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { airports } from '@/data/airports';
import { routes } from '@/data/routes';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudichauffeurservice.com';

  const staticPages = [
    '',
    '/about/',
    '/contact/',
    '/blog/',
    '/privacy-policy/',
    '/terms-and-conditions/',
    '/booking-policy/',
  ].map((route) => ({
    url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}-chauffeur-service/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const airportPages = airports.map((airport) => ({
    url: `${baseUrl}/airport-transfer/${airport.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const routePages = routes.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...airportPages,
    ...routePages,
    ...servicePages,
    ...blogPages,
  ];
}
