module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.eslint.json"],
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "tailwindcss",
    "import",
    "unused-imports",
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // react 関連を external より前にする
          // "pathGroupsExcludedImportTypes": ["react"], にしてみたが `react`, `react-dom` などが別グループになってしまったので pattern で無理やり同じグループにした
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
          {
            pattern: "component/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
