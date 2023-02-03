/**
 * unocss defineConfig
 * @link unocss: https://github.com/unocss/unocss
 * @link unocss-preset-weapp: https://github.com/MellowCo/unocss-preset-weapp
 * */

import { defineConfig, presetIcons } from 'unocss';
import presetWeapp from 'unocss-preset-weapp';
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer';

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
const exclude = [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]dist[\\/]/, /[\\/]tmui[\\/]/];

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      nonValuedAttribute: false,
      prefix: prefix,
      whRpx: false,
      transform: true,
      platform: 'uniapp',
      transformRules,
    }),
    // unocss 预设图标配置 https://www.npmjs.com/package/@unocss/preset-icons
    // 按照约定使用图标 <prefix><collection>-<icon> 或者 <prefix><collection>:<icon>
    presetIcons({
      scale: 1.2,
      warn: true,
      // prefix: 'i-', // 前缀，默认：i-
    }),
  ],
  shortcuts: [
    {
      'uno-center': 'uno-flex uno-justify-center uno-items-center',
      'uno-border-demo': 'uno-border-2px uno-border-red-500_75 uno-border-solid',
    },
  ],
  theme: {},
  transformers: [
    // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
    // transformerDirectives(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      classPrefix: prefix, // 为生成的class选择器添加前缀, ''
      transformRules, // 自定义转换规则
      nonValuedAttribute: false, // 支持匹配非值属性, true
      // attributes: [], // 需要转换的属性列表, ['bg', 'flex', 'grid', 'border', 'text', 'font', 'class', 'className', 'p', 'm', 'animate']
      exclude, // 排除转换目标, [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
      prefix,
      // ignoreNonValuedAttributes: [], // 忽略的非值属性列表, ['class']
      // include: [], // 需要转换的目标, [/\.vue$/,  /\.vue\?vue/]
      prefixedOnly: true, // 仅匹配前缀属性, false
      // transformEscape: true, // 转换转义字符, true
    }),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass({
      transformRules,
      exclude,
    }),
  ],
  exclude,
  extract: {
    exclude,
  },
});
