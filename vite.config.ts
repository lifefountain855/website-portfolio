import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      // Force Vite to use the application's React instance
      'react': path.resolve(import.meta.dirname, './node_modules/react'),
      'react-dom': path.resolve(import.meta.dirname, './node_modules/react-dom'),
    },
  },
})
