import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	base: '',
	plugins: [
		tsconfigPaths(),
		react(),
		legacy(),
		ViteImageOptimizer({
			test: /\.(jpe?g|png|webp|svg)$/i,
			webp: {
				lossless: true,
			},
			logStats: true,
			includePublic: true,
		}),
		createHtmlPlugin({
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				minifyJS: true,
				minifyCSS: true,
			},
		}),
	],
	server: {
		host: '0.0.0.0', // Listen on all IPs
		port: 5317,
		open: true,
	},
});
