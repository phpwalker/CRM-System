import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  { ignores: ['node_modules', 'dist'] },
  {
    plugins: {
      react: pluginReact,
      prettier: eslintPluginPrettier,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
