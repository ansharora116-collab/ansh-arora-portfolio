import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages serves a project repo from /<repo>/, so the deploy workflow
  // passes the right prefix in. Root deploys (Vercel, Netlify, a user page)
  // need nothing and fall through to '/'.
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
});