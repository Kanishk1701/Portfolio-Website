import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHub = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHub ? '/Portfolio-Website/' : '/',  // ✅ Auto-switch base path
})
