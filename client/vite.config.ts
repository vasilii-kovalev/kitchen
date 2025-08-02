import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import sonda from "sonda/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import unoCSS from "unocss/vite";

// https://vitejs.dev/config
const config = defineConfig({
	build: {
		// Required for Sonda.
		sourcemap: true,
	},
	plugins: [
		tsconfigPaths({
			configNames: ["tsconfig.app.json"],
		}),
		solid(),
		unoCSS(),
		sonda(),
	],
	server: {
		proxy: {
			"/api": "http://localhost:5000",
		},
	},
});

export default config;
