---
title: "Fetch vs Pull in Git"
date: "2018-05-21"
tags: ["development"]
---

A `git fetch` is actually automatically performed when you run `git pull`. Why would you ever use a fetch command then?

## Fetching

When we perform a [git fetch](https://git-scm.com/docs/git-fetch), we are gathering all the commits from the remote branch that is not in our current branch and storing them in our local repository. Fetching **does not** merge those commits with our current branch.

In more technical terms, `git fetch` will move the `FETCH_HEAD` pointer to the latest remote commit. The `HEAD` pointer will continue to point to the current commit in your working tree. After you perform a merge, the `HEAD` pointer will reference the same commit as `FETCH_HEAD`.

This command is useful for checking whether there has been any commits to the remote branch. Furthermore, you can use `git fetch --all` to fetch all remotes.

## Pulling

The [git pull](https://www.git-scm.com/docs/git-pull) command performs a `git fetch` and then a `git merge`. This will merge all remote commits with any commits you may have made locally.

A `git pull` will fetch all remote commits, move the `FETCH_HEAD` pointer to the latest commit, attempt to merge those commits with any changes you may have made, and then move the `HEAD` pointer to the latest commit.

This command is useful for when you know there are changes on the remote branch and you wish to merge them in with your local branch. Be careful of using this when you also have changes as you may break the things you were working on!

## Closing Thoughts

Depending on your situation, a [rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) may be more beneficial than fetching periodically and then merging when your feature is complete.

Also, check out my [other post](/blog/keeping-fork-in-sync-in-git) if you are looking to keep a fork in sync!
