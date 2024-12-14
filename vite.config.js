import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Ensure this matches the repository name

  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Default page (Home)
        rr: './rr.html', // New HTML page for Rick Roll
      },
    },
  },
});
