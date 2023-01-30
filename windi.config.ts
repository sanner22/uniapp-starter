import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

const prefix = 'uno-';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git', 'tmui'],
  },
  prefix: prefix,
  corePlugins: {
    //禁用一些小程序class不支持的分割
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
  },
  shortcuts: {
    'uno-center': 'uno-flex uno-justify-center uno-items-center',
  },
  attributify: {
    prefix: prefix,
  },
});
