const jsExts = ['.js', '.jsx'];
const tsExts = ['.ts', '.tsx'];
const allExts = [...jsExts, ...tsExts];

module.exports = {
  extends: [
    'airbnb', // basic rules extends from airbnb
    'prettier',
    'prettier/react',
    // 'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // recommended rules for typescript
    // 'plugin:import/typescript',
    // 'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      // jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  plugins: ['html', 'prettier', 'react-hooks'],
  // see https://github.com/benmosher/eslint-plugin-import/issues/1285
  settings: {
    'import/extensions': allExts,
    'import/parsers': {
      '@typescript-eslint/parser': tsExts,
    },
    'import/resolver': {
      node: {
        extensions: allExts,
      },
    },
  },
  rules: {
    // typescript
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 0, // duplicated
    // javascript
    'no-debugger': 1,
    'no-alert': 1,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      1,
      {
        // ignoreRestSiblings: true,
        'argsIgnorePattern': 'res|next|^err',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        'allowTaggedTemplates': true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        'props': false,
      },
    ],
    'no-console': 1,
    'no-underscore-dangle': 0,
    'no-shadow': [
      2,
      {
        'hoist': 'all',
        'allow': ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'prefer-const': [
      2,
      {
        'destructuring': 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'import/prefer-default-export': 0,
    'import': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'consistent-return': 0,
    'radix': 0,
    // react
    'react/display-name': 0,
    'react/destructuring-assignment': [
      1,
      'always',
      { 'ignoreClassFields': true }
    ],
    'react/prop-types': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx', 'tsx'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      1,
      {
        'aspects': ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    // prettier
    'prettier/prettier': [
      2,
      {
        'trailingComma': 'es5',
        'singleQuote': true,
        'semi': true,
        // tabWidth: 2,
        'printWidth': 80,
      },
    ],
  },
};
