import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 0,
      'prefer-const': ['error', {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false
      }],
      'quotes': [1, 'single', 'avoid-escape'],
      'semi': [1, 'always'],
      'indent': 0,
      'no-var': 1,
      'max-len': ['error', { 'code': 180, 'ignoreTemplateLiterals': true, 'ignoreStrings': true }],
      'no-underscore-dangle': 0,
      'import/extensions': [0, 'always'],
      'linebreak-style': ['error', 'windows'],
      'no-param-reassign': [2, { 'props': false }]
    }
  }
];