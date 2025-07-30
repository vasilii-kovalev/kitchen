import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import sonda from "sonda/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config
const config = defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		tsconfigPaths({
			configNames: ["tsconfig.app.json"],
		}),
		solid(),
		sonda(),
	],
	server: {
		proxy: {
			"/api": "http://localhost:5000",
		},
	},
});

export default config;
