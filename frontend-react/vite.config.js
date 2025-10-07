import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Only proxy backend API calls (use /api prefix)
      '/api': 'http://localhost:5000',
    },
  },
});



