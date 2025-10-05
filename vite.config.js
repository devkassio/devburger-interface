import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
});
