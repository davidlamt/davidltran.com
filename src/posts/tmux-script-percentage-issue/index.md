---
title: "tmux Script Percentage Issue"
date: "2018-08-17"
tags: ["development"]
---

I created a [workspace script](https://github.com/davidlamt/davidtranscend-com-gatsby/blob/master/tmux-workspace.sh) for _this_ project that starts a [tmux](/blog/set-up-vim-tmux-macos) session with a side pane set to 25% of the terminal's width.

I like to use [iTerm2](/blog/set-up-iterm2-zsh-oh-my-zsh) in full-screen when working on software projects. However, the above script starts a tmux session whose side pane seems to be more like 33% of the terminal's width.

I noticed that this issue only occurs when I resize my terminal emulator from it's default dimensions. Also, running the tmux commands directly creates a correct layout. As a result, I had a suspicion that the script is the culprit.

## Problem

After scouring the internet for hours, I discovered that there was a [change](https://github.com/tmux/tmux/blob/master/CHANGES) in tmux from version 2.5 and 2.6 that may be the cause of my problem:

>All new sessions that are unattached (whether with -d or started with no terminal) are now created with size 80 x 24. Whether the status line is on or off does not affect the size of new sessions until they are attached.

I am currently on version 2.7 (`tmux -V`). In my script, I am also creating a detached session before attaching so that I can set up the initial layout (create panes, send commands, select pane, etc.).

Using this [method](https://medium.com/@wpcarro/brewing-an-old-batch-of-tmux-81c0a62715f9), I was able to confirm that the changes in version 2.6 breaks my script in respect to percentages.

## Solution

One simple solution would to be to keep tmux pinned at version 2.5 (explained in the link above). I think this would have been a suitable approach if this issue was a bug. However, according to that change log, this is intended behavior.

According to the [tmux man page](https://linux.die.net/man/1/tmux), the `new-session` command accepts two options (`-x` and `-y`) to set the detached session's size:

>If -d is used, -x and -y specify the size of the initial window (80 by 24 if not given).

Unfortunately, this may have broke many tmux scripts when it was released. Fortunately for me, I only had a few scripts to update.

By adding `-x $(tput cols) -y $(tput lines)` to my `new-session` command, the layout seems to be fixed.

```bash
tmux new-session -d -n "develop" -s $session -x $(tput cols) -y $(tput lines)
```

### Analysis

The `-x` and `-y` options sets the session's initial width and height, respectively.

`$()` tells the executer to evaluate whatever is inside the parenthesis first.

In our situation, [tput](https://linux.die.net/man/1/tput) writes the following terminal attributes (`cols` and `lines`) to standard output. As a result, we are passing in the current width and height of our terminal to the new detached session.

## Final Thoughts

My OCD can finally rest whenever I start up this website's tmux workspace.

Many tmux script examples out there are still using `new-session` without those size options since they were probably written before tmux version 2.6. This caused me many hours of head scratching that I hope to save you from.

