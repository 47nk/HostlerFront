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
		open: true,
		port: 5317,
	},
});
