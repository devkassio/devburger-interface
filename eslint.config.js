import js from '@eslint/js';
import airbnbExtended from 'eslint-config-airbnb-extended';
import importPlugin from 'eslint-plugin-import';
import importHelpers from 'eslint-plugin-import-helpers';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Ignorar pastas e arquivos
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '*.config.js'],
  },

  // Configs base do JS e TS
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ✅ Corrigido: sem espalhar o objeto do Airbnb Extended
  ...Object.values(airbnbExtended.base),

  // Config React e Hooks
  react.configs.recommended,
  {
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Config Prettier
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: true,
          endOfLine: 'lf',
        },
      ],
    },
  },

  // Config de imports e organização
  {
    plugins: {
      import: importPlugin,
      'import-helpers': importHelpers,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react/',
            'module',
            '/^@shared/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },

  // Configurações globais, JSX e TS
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // Regras custom (sobrepõem Airbnb)
  {
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
