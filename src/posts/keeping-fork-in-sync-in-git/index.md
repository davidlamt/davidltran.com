---
title: "Keeping a Fork in Sync in Git"
date: "2017-09-24"
tags: ["development"]
---

Recently, a coworker asked me to help him undestand his team's Git workflow.

The general overview of their workflow is for each developer to have a fork of the original remote repository. Each developer would make additions on their fork and then submit a pull request to the original repository.

The issue he wanted input on was how to keep his forked copy in sync with the original repository.

## Purpose of a Fork

To eat food, of course. 🙂

To be honest, I rarely fork repositories because clones are sufficient in all the situations I have encountered.

While I was able to successfully help my coworker in the moment, I only came to understand the benefits of forks afterwards.

This [short read](https://guides.github.com/activities/forking/) helped me understand the reasoning behind forks better.

To summarize, **a fork can aid in contributing to someone else's project or provide a starting point for your own project**.

When you fork someone's repository, you have a personal copy of that person's project. From this point, you can begin making modifications and additions to their project. 

If you so choose, you can submit pull requests to the original repository to request that your changes be merged with the original copy.

## Syncing with the Original

I will assume that you have already created a fork and have a clone of the fork on your local environment.

Check out the previous link and my [Git basics](/blog/git-basics) post if you need a refresher!

We will be using the command line to accomplish our goal but any GUI client should have similar features.

My coworker was able to successfully sync a fork using [SourceTree](https://www.sourcetreeapp.com/).

### Adding a Remote
This section will only apply if your local repository does not already have the correct **upstream** (the repository you forked from) connection.

To check your remote connections, run the following command:

```bash
git remote --v
```

If you see an upstream connection that points to the original repository, you can continue to the next section.

You are here because your Git installation is broken. Just kidding 🙂. Continue reading to see how to add the necessary connection.

Run the following command to add an upstream remote connection:

```bash
git remote add upstream <URL_OF_ORIGINAL_REPOSITORY>
```

Now when you run `git remote --v`, you should see your newly added upstream connection.

### Merging with Upstream

To keep your local fork in sync with the original repository, you will need to merge any updates to the original into your local fork.

Run the following command  in order to fetch changes from upstream and merge it with your current branch.

```bash
git pull upstream <YOUR_CURRENT_BRANCH>
```

If there are any merge conflicts, you will have to resolve them.

In order to update your remote fork with these changes as well, you will need to push your changes to origin (`git push origin <YOUR_CURRENT_BRANCH>`).

### Rebasing with Upstream

I do not have an exceptional understanding of rebase but I understand that it should be prefered over merging in this scenario.

A rebase will take the updates in the original repository and apply it to your fork but not merge with your own modifications. As a result, your modifications as effectively based on the most updated repository.

I like this [short explanation](https://stackoverflow.com/a/804156) from Stack Overflow:

> A second scenario would be if you started doing some development and then another developer made an unrelated change. You probably want to pull and then **rebase** to base your changes from the current version from the repo.

Here is the command for performing a rebase:

```bash
git rebase upstream <YOUR_CURRENT_BRANCH>
```

Check out this [awesome post](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) to get a deeper understanding on the differences between merging and rebasing.

### Submitting a Pull Request

This section will be applicable if you wish to have your changes added to the original repository.

Make sure that your remote fork is up to date with your local fork changes before executing the following command: 

```bash
git request-pull <NAME_OF_COMMIT_ALREADY_IN_UPSTREAM> upstream <YOUR_CURRENT_BRANCH>
```

To be honest, submitting a pull request from the command line is a bit confusing to me. You can check out the documentation for the `request-pull` command [here](https://git-scm.com/docs/git-request-pull).

Most remote repository hosts (e.g. GitHub, Bitbucket, etc.) have an option to submit a pull request when viewing your remote fork. This may be a better option than the command line as the GUI is usually more intuitive.

## Closing Thoughts

My coworker's inquiry lead to a great learning experience for me (and possibly you).

If you see any flaws in my explanations, feel free to leave a comment below.

My hope is that more developers (including myself) can leverage Git (or any other [version control system](/blog/what-is-version-control)) in order to improve our day-to-day workflows.

Anything to simplify other tasks and mitigate concerns so that we can focus on innovation is fantastic!

How do you (or your team) structure version control? What are the benefits and downsides to doing things that way?