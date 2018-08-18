#!/bin/sh

session="davidtranscend-com-gatsby-workspace"

# Create new detached session and start vim
tmux new-session -d -n "develop" -s $session -x $(tput cols) -y $(tput lines)
tmux send-keys "vim" C-m

# Gatsby server pane
tmux split-window -h -p 25
tmux send-keys "npm i && gatsby develop" C-m

# Git pane
tmux split-window -v
tmux send-keys "git fetch origin" C-m

# Select first pane
tmux select-pane -t 0

# Attach to created session
tmux attach-session -t $session

