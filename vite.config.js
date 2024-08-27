import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": "/src/shared/ui/",
      "@styles": "/src/styles/",
      "@constants": "/src/shared/constants",
      "@layout": "/src/layout/",
      "@pages": "/src/pages/",
      "@config": "/src/shared/config/",
      "@hooks": "/src/shared/hooks/",
      "@context": "/src/shared/context",
      "@assets": "/src/shared/assets",
      "@utils": "/src/shared/utils"
    }
  }
});
