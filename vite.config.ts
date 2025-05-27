import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const routes = [
  '/',
  '/behandlingar',
  '/hifu',
  '/plaxpot',
  '/frekvens',
  '/frekvensterapi',
  '/microneedling',
  '/hudvard',
  '/coaching',
  '/kunskapsbank',
  '/about',
  '/contact',
  '/integritetspolicy',
  '/anvandarvillkor',
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://betterfeel.se',
      dynamicRoutes: routes,
      lastmod: new Date(),
      readable: true,
      exclude: ['/404'],
      outDir: 'dist',
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: [],
      includePublic: true,
      png: {
        quality: 80,
        compressionLevel: 9,
        palette: true,
        dither: 1.0,
      },
      webp: {
        lossless: false,
        quality: 80,
        alphaQuality: 80,
        effort: 6,
      },
      jpeg: {
        quality: 80,
        progressive: true,
        mozjpeg: true,
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                cleanupNumericValues: false,
              },
            },
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
    exclude: [],
    force: true
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    open: true
  },
  preview: {
    port: 5173,
    strictPort: true
  },
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    cssMinify: true,
  }
});
