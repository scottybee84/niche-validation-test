import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/niche-validation-test/', // GitHub Pages base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
