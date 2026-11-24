import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` makes the installable web app in dist/ (relative paths, so it works under /lexolume/ on GitHub Pages).
// `npm run build:single` produces one self-contained dist-single/index.html (used for the shareable preview).
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: mode === 'single' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'single' ? { outDir: 'dist-single' } : undefined,
}))
