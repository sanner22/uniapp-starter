import { resolve } from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import Unocss from 'unocss/vite'

// https://vitejs.cn/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
    define: {
      'process.env': {},
    },
    server: {
      host: true,
      // open: true,
      port: env.VITE_PORT as unknown as number,
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
        '/upload': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/upload/, ''),
        },
      },
    },
    plugins: [
      uni(),
      Unocss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
  }
}
