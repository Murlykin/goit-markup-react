import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: "/goit-markup-react/",
})
// export default defineConfig({
//   plugins: [react()],
//   base: "/test-task-practic/",
// });