// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://mconn.mrs-electronics.dev",
	integrations: [
		starlight({
			plugins: [],
			title: 'MConn Documentation',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/mrs-electronics-inc/mconn-docs' },
			],
			sidebar: [
				{
					label: "User Information and Safety",
					autogenerate: { directory: "user-information-and-safety" },
				},
				{
					label: "Getting Started",
					autogenerate: { directory: "getting-started" },
				},
				{
					label: "Understanding MConn Hardware",
					autogenerate: { directory: "understanding-mconn-hardware" },
				},
				{
					label: "MConn Programming",
					autogenerate: { directory: "mconn-programming" },
				},
				{
					label: "Starting User Application",
					autogenerate: { directory: "starting-user-application" },
				},
				{
					label: "Technical Support",
					autogenerate: { directory: "technical-support" },
				},
				{
					label: "Downloads",
					autogenerate: { directory: "downloads" },
				},
			],
		}),
	],
});
