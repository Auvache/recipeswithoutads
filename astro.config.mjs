import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	build: {
		format: 'directory'
	},
	site: 'https://recipeswithoutads.com',
	trailingSlash: 'always'
});
