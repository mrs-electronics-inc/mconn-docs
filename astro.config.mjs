// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://mconn.mrs-electronics.dev",
	integrations: [
		starlight({
			plugins: [],
			title: 'Mconn Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/mrs-electronics-inc/mconn-docs' },
			],
			sidebar: [
				{
					label: "Getting Started",
					autogenerate: { directory: "getting-started" },
				},
			],
		}),
	],
});
