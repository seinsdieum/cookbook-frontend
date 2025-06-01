import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@entities', replacement: '/src/entities' },
      { find: '@features', replacement: '/src/features' },
      { find: '@widgets', replacement: '/src/widgets' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@i18n', replacement: '/src/shared/i18n' },
      { find: '@routes', replacement: '/src/shared/routes' },
      { find: '@lib', replacement: '/src/shared/lib' },
      { find: '@shared-types', replacement: '/src/shared/types' },
      { find: '@ui', replacement: '/src/shared/ui' },
      { find: '@config', replacement: '/src/shared/config' },
      { find: '@api', replacement: '/src/shared/api' }
    ]
  },
  server: {
    port: 7777
  }
})
