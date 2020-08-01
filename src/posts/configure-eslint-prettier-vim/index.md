---
title: "Configuring ESLint and Prettier for Vim"
date: "2018-08-19"
categories: ["Development"]
tags: ["development environment", "eslint", "prettier", "vim"]
---

I previously wrote about [setting up ESLint and Prettier for VSCode](/blog/configure-eslint-prettier-vscode). At the moment, I am trying to use [Vim more often](/blog/set-up-vim-tmux-macos) so I thought it would be a good idea to document the process for getting set up with this editor as well!

## ESLint

[ESLint](https://eslint.org/) is a JavaScript linter that reports potential errors as you write code.

We will install ESLint globally:

```bash
npm i -g eslint
```

Afterwards, we can create an initial ESLint configuration file by running `eslint --init` in your project's directory. You will be given some choices on how you wish to initialize your configurations.

I recommend using one of the popular style guides as your base if your team does not already have an established style guide. Personally, I like using like using [Airbnb's style guide](https://github.com/airbnb/javascript) as a base.

Also, you can always add a specific style guide as a base later on even if you choose to customize your configurations at this point.

## Asynchronous Lint Engine

Next, we want to install [Asynchronous Lint Engine (ALE)](https://github.com/w0rp/ale). ALE is an _engine_ for running linters. In our case, ALE will run our JavaScript files through ESLint and display any potential errors and warnings.

We can use [vim-plug](https://github.com/junegunn/vim-plug) to install the ALE Vim plugin.

```bash
Plug 'w0rp/ale'
```

There are many Vim plugin managers out there but the plugin installation process should be similar.

Also, ESLint works out of the box with ALE! At this point, you should be able to see warnings and errors in your JavaScript files when editing with Vim. We will go over how to automate fixing those in a bit.

### Customizing the ALE Signs

The default styles of the error / warnings signs in the Vim sign column (left of the line numbers) did not not fit well with my setup. Fortunately, ALE provides a way to customize the signs and their colors.

Thanks to [this comment](https://github.com/w0rp/ale/issues/44#issuecomment-283252535), I added the following ALE configurations to `~/.vimrc` for styling the signs:

```bash
let g:ale_sign_error = '✘'
let g:ale_sign_warning = '⚠'
highlight ALEErrorSign ctermbg=NONE ctermfg=red
highlight ALEWarningSign ctermbg=NONE ctermfg=yellow
```

## Prettier

[Prettier](https://prettier.io/) is "an opinionated code formatter". Prettier will format the style of your code per your configurations.

For instance, you can tell Prettier you want your code to always use semicolons and single quotes. When executed, Prettier will add semicolons where necessary and replace double quotes with single quotes.

First, we will need to install the necessary packages.

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

These packages will help ESLint run Prettier automatically so Vim can display and fix errors from both software.

### Update ESLint Configurations

After the installation is complete, add the following to your ESLint configuration file (`.eslintrc*`):

```json
{
  "extends": [
    "prettier",
  ],
  "rules": {
    "prettier/prettier": "error",
  },
  "plugins": [
    "prettier"
  ]
}
```

You can customize the [Prettier options](https://prettier.io/docs/en/options.html) and [ESLint rules](https://eslint.org/docs/rules/) by adding them to "prettier/prettier" and "rules", respectively.

Do not fret if you do not know what to add at this point, you will learn common errors and warnings as you work more with JavaScript files using this setup. At that point, you can decide whether to modify the rules for certain errors and warnings.

As an example, [here](https://github.com/davidlamt/davidtranscend-com-gatsby/blob/master/.eslintrc.json) is this site's ESLint configurations.

## Automate Fixing

In addition to displaying errors, the ALE plugin provides a way to fix them as well. Add the following to your Vim configuration:

```vim
let g:ale_fixers = {
\  'javascript': ['eslint'],
\}
```

Now, we can run `:ALEFix` to fix the reported errors in our JavaScript files. You can map this command to make it easier to activate.

Personally, I like to format my files on save. We can do so with the following Vim configuration:

```vim
let g:ale_fix_on_save = 1
```

## Final Thoughts

Just a thought: writing posts about these procedures are great for future self-reference. I cannot wait to Google for a solution and find my own post.

That would be pretty awesome. Or not - it might just mean my memory is getting worst.

I would also like credit Alex LaFroscia for his [Writing JS in Vim](https://medium.com/@alexlafroscia/writing-js-in-vim-4c971a95fd49) post. It was a huge help in setting up my own JavaScript development environment in Vim.
