---
title: "Checking If tmux Session Exists in Script"
date: "2018-08-18"
categories: ["Development"]
tags: ["tmux"]
---

I am trying to adopt creating a tmux-workspace.sh script for my projects to help get my development environment set up quickly and easily.

One thing I found cumbersome was that my script would rerun the commands even if the tmux session exists. This produced a session whose layout had additional panes, windows, etc. depending on the script.

## Solution

We can check if the session already exists before creating one. If a session already exists, we will just attach to it. Otherwise, we will create a session, set it up, and then attach to it.

```bash
session="workspace"

# Check if the session exists, discarding output
# "if" statements use the exit status of a program
if tmux has-session -t $session 2>/dev/null; then
  # Set up your session
fi

# Attach to created session
tmux attach-session -t $session
```

### Analysis

According to the [man page](https://linux.die.net/man/1/tmux), the `has-session` command "report[s] an error and exit with 1 if the specified session does not exist. If it does exist, exit with 0."

We run that command and discard the output with `2>/dev/null`. Afterwards, we can use [$?](https://www.gnu.org/software/bash/manual/bash.html#index-_0024_003f) to check the last command's exit status (`has-session` in our case).

## Final Thoughts

Now, I can run my script without manually checking which sessions are active (`tmux ls`). Yup, I am that lazy.

Although, my laziness sometimes proves beneficial when it helps me find a more efficient approach to (and possibly automate) everyday task.

