---
title: "Stashing New Files in Git"
date: "2018-07-15"
tags: ["development"]
---

Let's say you are working on a new feature but need to switch branches to apply a fix. Your current branch has both tracked and untracked (new) files and you want to save both types for when you return.

While you could just `add` everything and then `commit` a "WIP" (work in progress), you will have to revert that commit in the future. Good thing Git has a great solution to this problem!

## Solution

```git
git stash push --include-untracked -m 'Some useful message here'
```

## Analysis

The [stash](https://git-scm.com/docs/git-stash) command stores the current local modifications and then reverts the working directory to the `HEAD` pointer. We use the `--include-untracked` option because this command does not save new files by default. 

We can also shorten the `--include-untracked` option to `-u`.

The `-m` option allows us to set a message for this stash operation so we can more easily reference it. This is especially useful when you have multiple stashes.

### Warning

Using the `stash` command with the `-u` option will clean your working directory after the stash. As a result, any untracked files you have in `.gitignore` will be permanently deleted.

There is the `--all` or `-a` option if you wish to stash untracked files that are also ignored.

## Closing Thoughts

Make sure to check out the official [documentation](https://git-scm.com/docs/git-stash)! Even though I am still learning all the different ways the `stash` command can be used, I can definitely see an improvement in my workflow.

I feel that there is a reduction in anxiety when I need to switch branches promptly. Anything that lessens the amount of potential overhead and worry is a win in my book.
