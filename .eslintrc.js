module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    'browser': true
  },
  rules: {
    'quotes': ['error', 'single', {  "allowTemplateLiterals": true, "avoidEscape": true }]
  }
};
