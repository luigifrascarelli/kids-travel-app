import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target older Safari (iOS 12.5.8 / Safari 12 engine, used by iPad mini 2)
    // so modern syntax like optional chaining (?.) and nullish coalescing (??)
    // gets transpiled down instead of shipped as-is and failing to parse.
    target: ['es2017', 'safari11'],
  },
})
