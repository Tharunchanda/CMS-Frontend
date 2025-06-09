import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CMS-Frontend/',
  plugins: [react()],
});