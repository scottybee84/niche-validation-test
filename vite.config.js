import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/repo-name/' for GitHub Pages if needed
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
