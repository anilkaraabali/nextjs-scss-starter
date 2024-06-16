/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'testing-library',
    'perfectionist',
    'jest',
    'jest-dom',
    'jest-formatting',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'plugin:testing-library/react',
    'plugin:jest-formatting/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:perfectionist/recommended-alphabetical',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'max-params': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'import/newline-after-import': 'error',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'testing-library/consistent-data-testid': [
      'error',
      {
        testIdPattern: '^[a-z]+(-[a-z]+)*$', // enforce the usage of kebab-case
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'jest-formatting/padding-around-expect-groups': 2,
      },
    },
  ],
};
