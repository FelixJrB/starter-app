import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'app/src',
  base: '/',
  publicDir: 'assets',
  build: {
    outDir: '../dist',
    target: 'esnext',
  },
  server: {
    port: 5173,
    open: true,
    hmr: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
});
