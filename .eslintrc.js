module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    "eslint:recommended", // Use the recommened rules from eslint
    "plugin:react/recommended", // Use the recommended rules from eslint-plugin-react
    "prettier/react", // Use eslint-config-prettier to disable ESLint formatting rules from eslint-plugin-react that would conflict with with Prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
],
  parser: "babel-eslint", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    sourceType: "module" // Allows for the use of imports
  }
}
