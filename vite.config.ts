import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const routes = [
  '/',
  '/behandlingar',
  '/hifu',
  '/plaxpot',
  '/frekvensterapi',
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
      exclude: [
        '**/branding/logos/BetterFeel_Navbar_Logo.png',
        '**/branding/logos/BetterFeel_Navbar_Logo.webp'
      ],
      includePublic: true,
      png: {
        quality: 100,
        compressionLevel: 0,
      },
      webp: {
        lossless: true,
        quality: 100,
        alphaQuality: 100,
      },
      jpeg: {
        quality: 75,
        progressive: true,
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
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: true, // Fail if port is already in use
  },
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    cssMinify: true,
  }
});
