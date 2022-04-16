import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   chunkSizeWarningLimit:3000,
	// },
  resolve : {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [vue(),   Components({
    dirs: ['src/components'],
    resolvers: IconsResolver({
      prefix: false,
      enabledCollections: ['heroicons-solid', 'heroicons-outline'],
    }),
  }),
  Icons(),]
})
