import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Important pour Docker
    },
    host: true, // Permet de servir l'application via le réseau
    port: 5173,
    strictPort: true,
  },
});
