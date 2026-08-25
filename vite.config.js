import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Root-domain deploy, so absolute paths. Use './' instead for GitHub Pages
  // project sites served from a subpath.
  base: '/'
});