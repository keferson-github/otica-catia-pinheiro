import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suprime warnings específicos do PostCSS sobre parâmetro 'from'
        if (warning.code === 'POSTCSS_PLUGIN_WARNING') return;
        if (warning.message && warning.message.includes('did not pass the `from` option')) return;
        warn(warning);
      }
    }
  }
}));
