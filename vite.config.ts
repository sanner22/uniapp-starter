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
        mockPath: './src/services/mock/base/user', // 设置模拟数据的存储文件夹，如果不是index.js需要写明完整路径
        localEnabled: true, // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
        supportTs: false, // 是否读取ts文件模块，设置为true时不能读取js文件
        logger: true, // 是否在控制台显示请求日志
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
