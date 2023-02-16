// TypeScript感知规则
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 'error',
    'no-irregular-whitespace': 'warn',
    'promise/param-names': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'vue/no-irregular-whitespace': 'warn',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    // 'vue/custom-event-name-casing': ['error', 'camelCase' | 'kebab-case'],
    'vue/no-template-shadow': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.vue'],
  //     rules: {
  //       'vue/component-name-in-template-casing': [2, 'kebab-case'],
  //       'vue/require-default-prop': 0,
  //       'vue/multi-word-component-names': 0,
  //       'vue/no-reserved-props': 0,
  //       'vue/no-v-html': 0,
  //     },
  //   },
  // ],
  // globals: {
  //   defineProps: 'readonly',
  //   defineEmits: 'readonly',
  //   defineExpose: 'readonly',
  //   withDefaults: 'readonly',
  //   uni: 'readonly',
  // },
}
