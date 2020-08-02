---
title: 'Create React App + TypeScript + ESLint + Prettier Quick Start'
date: '2020-08-02'
categories: ['Development']
tags: ['development environment', 'eslint', 'prettier', 'react', 'typescript']
---

[Create React App (CRA)](https://github.com/facebook/create-react-app) is a great way to quickly get started with a [React](https://reactjs.org/) project. CRA even comes baked with a good amount of [sensible defaults](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js) for ESLint.

However, you may find it difficult to adjust and extend these settings without [ejecting](https://create-react-app.dev/docs/available-scripts/#npm-run-eject) (which, in my opinion, defeats the purpose of using CRA).

This guide will help with setting up a CRA project with modern tooling without ejecting.

## TypeScript

This one is probably the easiest step. CRA supports TypeScript out of the box! Just use the `--template typescript` option when creating your CRA project:

```shell
npx create-react-app my-app --template typescript
```

### What If I Have an Existing CRA Project?

No problem! Just run the following command.

```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

Afterwards, rename any file to be a TypeScript file (`.ts` or `.tsx` extension) and restart your development server.

## ESLint

ESLint will be used to _lint_ your code and catch "bad" practices determined by you or your team.

Install ESLint and the dependencies necessary for our set up:

```shell
npm i -D eslint@^6.6.0 eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- `eslint`: The core ESLint library, the current version of CRA (v3.4.1) requires ^6.6.0 but this may change
- `eslint-plugin-react`: React specific linting rules for ESLint
- `@typescript-eslint/eslint-plugin`: A plugin that contains a bunch of ESLint rules that are TypeScript specific
- `@typescript-eslint/parser`: The parser that will allow ESLint to lint TypeScript code

### Create ESLint Configuration File

Create a `.eslintrc.js` file at the root of your project. While there are other formats possible for the configuration file, I prefer the `.js` version since it allows comments.

```js
// .eslintrc.js

module.exports = {
  env: {
      browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
      jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
      node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
      "react-app", // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
      "eslint:recommended", // Use the recommened rules from eslint
      "plugin:@typescript-eslint/recommended", // Use the recommended rules from @typescript-eslint/eslint-plugin
      "plugin:react/recommended", // Use the recommended rules from eslint-plugin-react
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
      },
      sourceType: "module", // Allows for the use of imports
  },
  plugins: [
      "@typescript-eslint", // Allows for manually setting @typescript-eslint/* rules 
      "react", // Allows for manually setting react/* rules
  ],
  settings: {
      react: {
          version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      },
  },
};
```

`react-app` should go first in `extends` since it is the default provided by CRA. We want these rules to be applied first so they can be overwritten by other extensions if needed.

#### Extends vs. Plugins

Extends uses a configuration file to apply a set of predefined rules.

Plugins provide a set of rules that a user can toggle. Having a plugin does not automatically add any rules, you will need to enable them manually.

### Optionally Override CRA's Linting

By default, CRA running in development mode (`npm run start`) will only notify you of ESLint issues set by the `react-app` rules.

In essence, the issues you see in the console during development may be different than the ones you see if you ran `eslint --ext .ts,.tsx src/`.

If you prefer to have them synchronized, create a `.env` file in your project's root directory and add `EXTEND_ESLINT=true`.

```
// .env

EXTEND_ESLINT=true
```

Note that this is currently an [experminal feature](https://create-react-app.dev/docs/setting-up-your-editor/#experimental-extending-the-eslint-config) as of CRA v3.4.1.

### Optionally Add npm Lint Script

```
// package.json

{
  // ...
  "scripts": {
    // ...
    "lint": "eslint --ext .ts,.tsx src/"
  }
}

```

### Optionally Install VSCode's ESLint Extension

If you are using [VSCode](https://code.visualstudio.com/), you will want to install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). We will go over the integration of VSCode later in the post.

## Prettier

Prettier is a formatter that _formats_ your code according to a specified style guide.

Install Prettier and the dependencies necessary for our set up:

```shell
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

- `prettier`: The core Prettier library
- `eslint-config-prettier`: Disables ESLint rules that might conflict with prettier, make sure this goes after other extensions so it can override them
- `eslint-plugin-prettier`: Runs Prettier as an ESLint rule, make sure this goes last so it overrides other settings to display errors

### Create Prettier Configuration File

Again, I prefer the `.js` version here for comments if needed.

```js
// .prettierrc.js

module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
};
```

We will also need to update our `.eslintrc.js` file with the following changes.

```diff
// .eslintrc.js after Prettier configuration

module.exports = {
  env: {
      browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
      jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
      node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
      "react-app", // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
      "eslint:recommended", // Use the recommened rules from eslint
      "plugin:@typescript-eslint/recommended", // Use the recommended rules from @typescript-eslint/eslint-plugin
      "plugin:react/recommended", // Use the recommended rules from eslint-plugin-react
+     "prettier/@typescript-eslint", // Use eslint-config-prettier to disable ESLint formatting rules from @typescript-eslint/eslint-plugin that would conflict with Prettier
+     "prettier/react", // Use eslint-config-prettier to disable ESLint formatting rules from eslint-plugin-react that would conflict with with Prettier
+     "plugin:prettier/recommended", // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
      },
      sourceType: "module", // Allows for the use of imports
  },
  plugins: [
      "@typescript-eslint", // Allows for manually setting @typescript-eslint/* rules 
+     "prettier", // Allows for manually setting prettier/* rules
      "react", // Allows for manually setting react/* rules
  ],
  settings: {
      react: {
          version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      },
  },
};
```

## Optionally Configure VSCode Settings

Open the workspace settings (you can do it with the command pallete: `Preferences: Open Workspace Settings (JSON)`) - this will create the file if one does not exist.

Our goals are to:

- Disable VSCode formatting for .ts and .tsx files.
- Enable VSCode formatting for other languages.
- Allow ESLint (with Prettier rules) to format on save.
 
```json
// settings.json

{
  // Disable default VSCode formatting for TypeScript files
  "[typescript]": {
    "editor.formatOnSave": false
  },
  // Disable default VSCode formatting for TypeScript React files
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  // Allow formatting for other languages
  "editor.formatOnSave": true,
  // Let ESLint (incorporating Prettier errors) format code on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Apparently, this JSON file is an exception in that it allows comments. 🤷‍♂️

## Potential Resolutions for Issues

- Turn it off and back on (i.e., restart VSCode)
- If `npm run start` complains about the currently installed ESLint version being different than the CRA depedency, reinstall based on that vesrion
- Delete the `node_modules` directory and `npm i` because of potential ESLint caching issues
  - [node_modules/react-scripts/config/webpack.config.js: Change cache to false](https://github.com/facebook/create-react-app/issues/9007#issuecomment-628601097)

## Acknowledgements

The following posts helped me integrate my own workflow & served as an inspiration for this post. Thank you!

- [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project/)
- [How to use Prettier with ESLint and TypeScript in VSCode](https://khalilstemmler.com/blogs/tooling/prettier/)