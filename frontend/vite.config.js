import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],

  server:{
    port:3000,
    proxy:{
      '/api':{
        target:"https://stayfit-backend-g9toc02r3-thomas-josephs-projects.vercel.app/",
        changeOrigin:true,
      }
    },
  },
})                                        

