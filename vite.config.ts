import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/sql.js-httpvfs/dist/sqlite.worker.js',
          dest: 'assets'
        },
        {
          src: 'node_modules/sql.js-httpvfs/dist/sql-wasm.wasm',
          dest: 'assets'
        },
      ],
    }),
  ],
});
