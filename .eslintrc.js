module.exports = {
  root: true,

  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  ignorePatterns: ['/dist/**', '/docs', '/assets', '/*.config.*'],

  plugins: ['import-newlines'],

  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],

  rules: {
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error', { allow: ['_id'], allowAfterThis: true }],
    'no-use-before-define': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'index',
        'parent',
        'sibling',
        'object',
        'type',
      ],
      alphabetize: {
        order: 'asc',
        // orderImportKind: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
      pathGroups: [
        {
          group: 'internal',
          pattern: '@/**',
          position: 'before',
        },
      ],
    }],
    'import-newlines/enforce': [
      'error',
      { items: 5 },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'sort-imports': ['error', {
      allowSeparatedGroups: true,
      ignoreCase: true,
      ignoreDeclarationSort: true,
    }],
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '*',
        ],
        markers: [
          '/',
        ],
      },
    ],
    'prefer-destructuring': 'off',

    // ** Typescript specific rules ** //
    // 'indent': 'off',
    // '@typescript-eslint/indent': ['error', 2],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-spaced-func': 'off', // deprecated, so disabling here
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    // ** Vue specific rules ** //
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/singleline-html-element-content-newline': [
      'off',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/attributes-order': 'error',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/no-setup-props-destructure': 'off',
    'vue/max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],
    'vue/v-on-event-hyphenation': ['error', 'never'],
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/__mocks__/*.{j,t}s?(x)',
        '**/tests/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.html'],
      rules: {
        'vue/comment-directive': 'off',
        'vue/html-closing-bracket-newline': 'off',
      },
    },
  ],
};
