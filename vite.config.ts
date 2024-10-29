import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import lqip from 'vite-plugin-lqip';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
      exclude: ['**/icons/**'],
    }),
    lqip()
  ],
})
