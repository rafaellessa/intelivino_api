import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
const projectRootDir = resolve(__dirname)

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
})
