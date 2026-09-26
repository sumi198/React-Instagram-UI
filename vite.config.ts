//vite.config.ts

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
//  This line is added 
import tailwindcss from '@tailwindcss/vite'   

// ,tailwindcss(), added
// https://vite.dev/config/

export default defineConfig({
  plugins: [react() ,tailwindcss(),],
})


