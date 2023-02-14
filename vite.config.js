import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue';
import {
	fileURLToPath,
	URL
} from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	alias: {
		'@': fileURLToPath(new URL("./src",
			import.meta.url)),
	},
	server: {
		watch: {
			usePolling: true
		},
		host: true,
		strictPort: true,
		port: 3000
	}
})