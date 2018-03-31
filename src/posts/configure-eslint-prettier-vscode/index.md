---
title: "Configuring ESLint and Prettier in VSCode"
date: "2018-03-30"
tags: ["development"]
---

Recently, I was trying to improve my programming workflow but found the process of setting up ESLint and Prettier for VSCode confusing. I wanted my source code to both be linted and formatted on save.

Thankfully, I found a [short tutorial](https://www.youtube.com/watch?v=YIvjKId9m2c) by Wes Bos that heled me get started. However, I had a bit of trouble installing dependencies and configuring the plugins.

This post will review the video procedures in written form and dive a bit further into installing and configuring dependencies.

## ESLint vs. Prettier

Actually, it is not a battle between the two tools. They work in harmony to greatly improve one's workflow.

You should think of it as ESLint *and* Prettier.

ESLint is a linter that *lints* your code and helps detect "bad" practices. You and / or your team determines what bad practices are.

Prettier is a formatter that *formats* your code according to a specified style guide. Again, you and / or your team create a style guide.

For both tools, there are some useful defaults and there are definitely numerous base configurations created by other companies that you can build on.

## Install ESLint VSCode Extension

First up, we need to install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

Note that are not installing the Prettier extension for VSCode. We are going to be configuring Prettier through our ESLint configuration file.

## Install npm Packages

This is the part that caused me headaches. I did not know which packages to install and some packages also had dependencies.

To help handle dependencies, I first installed the `install-peerdeps` package.

```bash
npm i -g install-peerdeps
```

Afterwards, we can go ahead and install our other packages (and their dependencies):

```bash
install-peerdeps -d eslint-plugin-prettier
```

We need to install the following packages:

* eslint-config-airbnb (I like to use Airbnb's ESLint configuration as a base)
* eslint-plugin-prettier (what we just installed above)
* eslint-config-prettier
* babel-eslint

Unfortunately, we have to install these packages one-by-one since install-peerdeps does not support multiple packages as arguments.

## Set Up ESLint Configuration

Open up your VSCode's Commands panel (Ctrl + Shift + P on Windows) and type "eslint". Select the "ESLint: Create .eslintrc.json File" option. This will create the ESLint configuration file at the root directory of your project.

There is also a way to set up a global ESLint configuration file. However, I prefer having the configuration at the project level since different projects may require different configurations.

Your newly created file should looking similar to the following:

```json
{
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "sourceType": "module"
  },
  "rules": {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn"
  }
}
```

You will want to add the following properties:

```json
{
  // ...
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "rules": {
      // ...
        "prettier/prettier": [
        "error",
        {
            "trailingComma": "es5",
            "singleQuote": true,
            "printWidth": 120,
            "semi": true
        }
      ],
    },
    "plugins": [
        "prettier"
    ]
}
```

[Here](https://github.com/davidlamt/davidtranscend-com-gatsby/blob/master/.eslintrc.json) is a link to this site's ESLint configuration file as an example.

## Update VSCode Settings

Next, we will need to update the editor's settings.

Please add the following to your VSCode User Settings.

```json
// Disable default VSCode formatting for JavaScript
"[javascript]": {
    "editor.formatOnSave": false
},

// Allow formatting for other languages
"editor.formatOnSave": true,

// Enable ESLint (with Prettier plugin) to format code on save
"eslint.autoFixOnSave": true,
```

Now, instead of applying the VSCode's default JavaScript formatting, ESLint will take care of formatting your code using the Prettier plugin.

## Closing Thoughts

Once again, I would like to credit [Wes Bos](https://wesbos.com/) for providing a useful video tutorial. I just wanted to provide a step-by-step guide with a bit more detail.

I hope this awesome combination of linting and formatting files will help you become more productive!
