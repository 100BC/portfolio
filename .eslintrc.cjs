/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  rules: {
    // Svelte
    'svelte/block-lang': ['error', { script: 'ts', style: 'scss' }],
    'svelte/button-has-type': 'warn',
    'svelte/no-ignored-unsubscribe': 'error',
    'svelte/no-useless-mustaches': 'warn',

    // Svelte Workarounds
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',

    // Pref TypeScript
    'no-undef-init': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
