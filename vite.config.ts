import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@app',
        replacement: resolve(__dirname, './src/app')
      },
      {
        find: '@ui',
        replacement: resolve(__dirname, './src/app/ui')
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, './src/app/ui/assets'),
      },
      {
        find: '@css',
        replacement: resolve(__dirname, './src/app/ui/assets/css'),
      },
      {
        find: '@images',
        replacement: resolve(__dirname, './src/app/ui/assets/images'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/app/ui/components'),
      },
      {
        find: '@layouts',
        replacement: resolve(__dirname, './src/app/ui/layouts'),
      },
      {
        find: '@router',
        replacement: resolve(__dirname, './src/app/ui/router'),
      },
      {
        find: '@views',
        replacement: resolve(__dirname, './src/app/ui/views'),
      },
      {
        find: '@composable',
        replacement: resolve(__dirname, './src/app/ui/composable'),
      },
      {
        find: 'package.json',
        replacement: resolve(__dirname, './package.json'),
      },
    ],
  },
})
