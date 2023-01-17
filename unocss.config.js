/**
 * unocss defineConfig
 * @link unocss: https://github.com/unocss/unocss
 * @link unocss-preset-weapp: https://github.com/MellowCo/unocss-preset-weapp
 * */

import { defineConfig, presetIcons } from 'unocss';
import presetWeapp from 'unocss-preset-weapp';
import {
  transformerAttributify,
  transformerClass,
} from 'unocss-preset-weapp/transformer';

const transformRules = {
  '.': '-d111-',
  '/': '-s111-',
  ':': '-c111-',
  '%': '-p111-',
  '!': '-e111-',
  '#': '-w111-',
  '(': '-b111l-',
  ')': '-b111r-',
  '[': '-f111l-',
  ']': '-f111r-',
  $: '-r111-',
  ',': '-r222-',
};

const prefix = `uno-`;

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      nonValuedAttribute: true,
      prefix: prefix,
      whRpx: true,
      transform: true,
      platform: 'uniapp',
      transformRules,
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [
    {
      'uno-border-base': 'uno-border uno-border-gray-500_10',
      'uno-z-tar-both': 'uno-z-988',
      'uno-head-fixed':
        'uno-fixed uno-top-0 uno-left-0 uno-w-full uno-z-tar-both',
      'uno-center': 'uno-flex uno-justify-center uno-items-center',
    },
  ],
  theme: {},
  transformers: [
    transformerAttributify({
      classPrefix: prefix,
      transformRules,
      nonValuedAttribute: true,
    }),
    transformerClass({
      transformRules,
    }),
  ],
});
