import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      // Paste all rules from your .eslintrc.js here
      "object-curly-spacing": ["error", "never"],
      "eol-last": ["error", "always"],
      "indent": ["error", 2],
      "comma-dangle": ["error", "always-multiline"],
      "quote-props": ["error", "consistent-as-needed"],
      "no-unused-vars": "warn",
      "require-jsdoc": "off"
    }
  }
];
