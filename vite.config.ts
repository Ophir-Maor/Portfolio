import { existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  define: {
    __RESUME_PREVIEW_AVAILABLE__: JSON.stringify(
      existsSync(new URL('./public/resume-preview.png', import.meta.url)),
    ),
    __RESUME_AVAILABLE__: JSON.stringify(
      existsSync(new URL('./public/Ophir_Maor_Resume.pdf', import.meta.url)),
    ),
  },
});
