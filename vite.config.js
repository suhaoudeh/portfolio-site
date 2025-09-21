import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: { 
    allowedHosts :[
      'portfolio-site-yp4t.onrender.com'
    ]
  }
})
