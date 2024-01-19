import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use 'src/lib/theme' as *;",
      },
      postcss: {
        map: true,
        plugins: [autoprefixer()],
      },
    },
  },
});
