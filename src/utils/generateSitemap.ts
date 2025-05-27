import { writeFileSync } from 'fs';
import { format } from 'date-fns';

const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/hifu',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/frekvens',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/plaxpot',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/microneedling',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/hudvard',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/coaching',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/om-oss',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    path: '/kontakt',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    path: '/kunskapsbank',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/integritetspolicy',
    priority: '0.3',
    changefreq: 'yearly'
  },
  {
    path: '/villkor',
    priority: '0.3',
    changefreq: 'yearly'
  }
];

const baseUrl = 'https://betterfeel.se';
const currentDate = format(new Date(), 'yyyy-MM-dd');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

// Write sitemap to public directory
writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!'); 