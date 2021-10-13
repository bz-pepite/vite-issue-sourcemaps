import { UserConfig } from "vite";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command == "build") {
    const externalDeps = [...Object.keys(pkg.dependencies)];

    const configLib: UserConfig = {
      logLevel: "warn",
      plugins: [],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: pkg.name,
          formats: ["es"],
        },
        sourcemap: true,
        minify: "esbuild",
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: externalDeps,
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            // globals: {
            //   react: 'React',
            // },
          },
        },
      },
    };

    return configLib;
  } else {
    // https://vitejs.dev/config/
    const config: UserConfig = {
      plugins: [react()],
      logLevel: "info",
    };

    return config;
  }
});
