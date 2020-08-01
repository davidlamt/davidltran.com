---
title: "Git Push Rejected After Rebase"
date: "2018-07-29"
categories: ["Development"]
tags: ["git"]
---

Have you ever rebased your branch on top of another and then try to push the updated branch?

Most likely, Git will reject your request and complain about your branch being behind its remote counterpart.

No worries, you can resolve this issue fairly easily. But **make sure** you apply this solution intentionally.

## Solution

You just need to add a single option to your [push](https://git-scm.com/docs/git-push) command:

```git
git push origin LOCAL_BRANCH --force
```

You can also use the `-f` alias for `--force`. This option _forces_ the push command to execute successfully. Under the hood, this option is disabling certain checks that aid in preventing the loss of data.

We should strive to use the longer, but safer, `--force-with-lease` option instead of `-f`. More on this in a bit!

## Analysis

`git push` assumes that the remote branch can be [fast-forwarded](https://confluence.atlassian.com/bitbucket/git-fast-forwards-and-branch-management-329977726.html) to your local branch. This means that the command is only expecting additional commits on your local branch.

When you perform a `git rebase`, your local branch is brought up to date with the latest remote branch commits and your local commits are then appended as **new** commits.

As a result of rebasing, the two branches will have diverged. The local branch's history has changed because the original commits are now new commits at the end. Therefore, both the local branch and the remote branch has advanced so Git cannot perform a fast-forward merge.

Since the changes from the rebase were intentional, we can _force_ Git to ignore the state of the remote branch and just accept the commits from the local branch.

As stated before, we need to be intentional when using the `-f` option since rewriting history can have huge implications on others working with the repository. It is recommended to only perform this operation on your own branch.

Suffering will ensue if you change history on a branch that others are also working on. This may result in certain commits being overwritten and confusing merge conflicts. 

### A Safer Option

If you do not want to be hated by team members, try to use `--force-with-lease` in place on `-f`. The `--force-with-lease` option helps prevent rewriting others' commits. This option requires that the remote reference value be the same as the remote tracking-branch we have for them.

This Stack Overflow [answer](https://stackoverflow.com/questions/8939977/git-push-rejected-after-feature-branch-rebase#37460330) provides an excellent example of why this option should be preferred.

## Final Thoughts

After researching for this topic, I feel like I was a bit careless when it came to interacting with communal branches. Things could have gone south quite quickly. Hopefully I can be a better branch-mate to others now.

Check out this great Atlassian [article](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) on merging and rebasing for awesome visuals and explanations! I found the visuals especially useful in understanding how rebasing works.
