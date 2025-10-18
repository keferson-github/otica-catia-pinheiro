import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
    // Configurações para servir arquivos grandes (vídeos)
    middlewareMode: false,
    fs: {
      strict: false
    },
    // Headers específicos para vídeos durante desenvolvimento
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configurações para assets grandes
  assetsInclude: ['**/*.mp4', '**/*.webm'],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suprime warnings específicos do PostCSS sobre parâmetro 'from'
        if (warning.code === 'POSTCSS_PLUGIN_WARNING') return;
        if (warning.message && warning.message.includes('did not pass the `from` option')) return;
        warn(warning);
      },
      output: {
        // Configurações específicas para assets de vídeo
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.mp4')) {
            return 'video_depoimento/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    // Aumenta o limite de tamanho para assets grandes
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 0 // Não fazer inline de assets grandes
  }
}));
