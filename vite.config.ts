import tailwindcss from "@tailwindcss/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const base = env.VITE_APP_PUBLIC_PATH || "/";
	const isProduction = mode === "production";

	return {
		base,
		resolve: {
			tsconfigPaths: true,
		},
		plugins: [
			react(),
			vanillaExtractPlugin({
				identifiers: ({ debugId }) => `${debugId}`,
			}),
			tailwindcss(),

			isProduction &&
				visualizer({
					open: true,
					gzipSize: true,
					brotliSize: true,
					template: "treemap",
				}),
		].filter(Boolean),

		server: {
			open: true,
			host: true,
			port: 3001,
			proxy: {
				"/api": {
					target: "http://localhost:3000",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
					secure: false,
				},
			},
		},

		build: {
			target: "esnext",
			minify: "oxc",
			sourcemap: !isProduction,
			cssCodeSplit: true,
			chunkSizeWarningLimit: 1500,
			rolldownOptions: {
				output: {
					codeSplitting: {
						groups: [
							{
								name: "vendor-core",
								test: /[\\/]node_modules[\\/](?:react|react-dom|react-router)(?:[\\/]|$)/,
								priority: 40,
							},
							{
								name: "vendor-ui",
								test: /[\\/]node_modules[\\/](?:antd|@ant-design[\\/]cssinjs|styled-components)(?:[\\/]|$)/,
								priority: 30,
							},
							{
								name: "vendor-utils",
								test: /[\\/]node_modules[\\/](?:axios|dayjs|i18next|zustand|@iconify[\\/]react)(?:[\\/]|$)/,
								priority: 20,
							},
							{
								name: "vendor-charts",
								test: /[\\/]node_modules[\\/](?:apexcharts|react-apexcharts)(?:[\\/]|$)/,
								priority: 10,
							},
						],
					},
					minify: {
						compress: {
							dropConsole: isProduction,
							dropDebugger: isProduction,
						},
					},
					comments: { legal: false },
				},
			},
		},

		optimizeDeps: {
			include: ["react", "react-dom", "react-router", "antd", "axios", "dayjs"],
			exclude: ["@iconify/react"],
		},

		oxc: {
			target: "esnext",
		},
	};
});
