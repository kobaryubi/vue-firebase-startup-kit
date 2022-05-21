module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'vue/html-indent': ['error', 2],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  }
};
