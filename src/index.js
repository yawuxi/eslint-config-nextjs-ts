import typescriptParser from '@typescript-eslint/parser'
import globals from 'globals';
import nextjsPlugin from '@next/eslint-plugin-next';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin'
import base from './lib/base.js'
import stylistic from './lib/stylistic.js'
import typescript from './lib/typescript.js'
import react from './lib/react.js'
import imports from './lib/import.js'

export default {
  files: ['**/*.@(ts|tsx)'],
  ignores: [
    'node_modules/',
    '.next/',
    'build/',
    '*.d.ts'
  ],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        globalReturn: false,
        impliedStrict: true,
        jsx: true,
      },
    },
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
      ...globals.node,
    }
  },
  plugins: {
    '@stylistic': stylisticPlugin,
    '@next/next': nextjsPlugin,
    'import': importPlugin,
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    '@typescript-eslint': typeScriptPlugin,
  },
  settings: {
    'react': {
      version: 'detect'
    }
  },
  rules: {
    ...reactPlugin.configs['jsx-runtime'].rules,
    ...nextjsPlugin.configs.recommended.rules,
    ...typeScriptPlugin.configs.recommended.rules,
    ...base,
    ...stylistic,
    ...typescript,
    ...react,
    ...imports,
  },
}
