import { resolve } from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

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

      // mockjs
      viteMockServe({
        mockPath: './src/services/mock/user', // 解析刚刚user.ts的位置
        localEnabled: true, // 是否开启开发环境
      }),
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
