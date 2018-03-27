---
title: "Updating Git Submodules"
date: "2017-11-05"
tags: ["development"]
---

A [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) is a reference to another project.

When creating software, we often utilize other libraries or packages to create a separation of concerns or to prevent reinventing the wheel. What is the best way to bundle those external libraries with your project?

If you want control over the library, including the library via a CDN or package manager is not optimal. This method makes it difficult to modify the source code of the library if that becomes necessary.

Furthermore, simply copying the source code into your own project creates a tightly coupled system. Following this process will create complications when merging with upstream changes.

One recommendation is to use Git submodules in order to store the external library's Git repository as a subdirectory of your own Git repository. As a result, the modifications to either projects are kept separate.

You can follow the above link for more information on how to get started with Git submodules. This post will primarily cover how to update the submodule component for your existing projects.

## Cloning a Repository with Submodules

Let's say there is a project with submodules that you wish to clone onto your local computer. However, after cloning, you discover that the directory containing the submodule is empty.

This is because Git does not recursively clone submodules by default. You can ammend this issue by adding `--recursive` or `--recurse-submodules` to your `git clone` command.

Here is an example:

```bash
$ git clone --recursive -j4 git://github.com/example/example.git
```

Wait, what does the `-j4` option do? [This option](https://www.git-scm.com/docs/git-clone#git-clone--jltngt) tells Git to fetch up to 4 submodules in parallel. Pretty neat, right?

## Update Submodules for an Existing Repository

Okay, you already have a cloned repository with submodules on your local machine but the submodule directory is empty. Maybe you did not realize you cloned it without the aforementioned options and you have already made changes to other sections of the projects.

What can you do?

Nuke the repository and start over.

Just kidding. Although, I cannot say that I have not taken that "easy" path for other issues. 🙂

In this case, you will need to navigate to the empty submodule folder and execute the following command:

```bash
$ git submodule update --init --recursive
```

The [update](https://git-scm.com/docs/git-submodule#git-submodule-update--init--remote-N--no-fetch--no-recommend-shallow-f--force--checkout--rebase--merge--referenceltrepositorygt--depthltdepthgt--recursive--jobsltngt--ltpathgt82308203) command will pull in the latest revision on the server. The `--init` option is if the submodule is not initialized (cloned) yet. The `--recursive` option updates all nested submodules as well.

### Updating Existing Submodules

After you have the submodule initialized within your local repository, you can retrieve the latest changes like you would in a normal repository. You can navigate into the submodule folder and use `git pull origin master` if you want updates from the master branch.

## A Real Use Case

When I was [migrating my blog from Wordpress to Hugo](/blog/migrating-from-wordpress-to-hugo), I got a first-hand experience with dealing with Git submodules.

[Hugo](https://gohugo.io/) is a static site generator that allows the customization of the site via themes. I eventually found a theme I liked and discovered that many other people included their themes as submodules in order to improve modularity.

My Hugo blog repository only needs to know about the content I have and should not care about which theme is used. This is the type of abstraction that I love.

As a result, if you check out my blog repository's [theme folder](https://github.com/davidlamt/personal-blog/tree/master/themes), you can see that it is referencing a fork of a theme as a Git submodule.

Having the forked theme as a Git submodule allows me to update either the blog's content or its theme separately. Furthermore, this will allow me to swap out the theme for a new one with relative ease.

## Closing Thoughts

I truly appreciate the modularity and extensibility that Git submodules provide. It reminds me of other package managers like [NPM](https://www.npmjs.com/). I believe that this movement towards abstraction and transposable components will prove advantageous.

What are your thoughts on Git submodules? When and where do you find yourself using them? Do you believe that this shift towards components is a fad or is it here to stay?
