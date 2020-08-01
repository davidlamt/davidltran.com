---
title: "Using Vim for a Week"
date: "2017-06-04"
categories: ["Development"]
tags: ["thoughts", "vim"]
---

I have been listening to [development podcasts](/blog/podcasts-to-listen-to-in-2017) development podcasts for a while now. Once in a while, I hear either a host or a guest mention how great Vim is and how everybody should at least try it.

Well, here I am. A week after *trying* to use Vim. Emphasis on try because it is, and will always be, a learning process.

## Why Vim?

According to [legend](https://www.quora.com/What-are-the-advantages-and-disadvantages-of-using-Vim-as-your-main-code-editor/answer/Abhinav-Pratap-Singh-4?srid=uNVXW), **things start to happen almost as fast as you can think of them when you use Vim**.

Well, I am sold. 🙂

Truthfully, I have only recently begun using integrated development environments (IDEs). Before my current position, I mostly used graphical user interface (GUI) text editors and dabbled in IDEs here and there.

There are three advantages to Vim that caught my attention:

1. Speed
2. Versatility
3. Ubiquity

The load times for Vim are minuscule compared to those of IDEs because there is **no GUI overhead**. More importantly, **the speed at which you can perform operation is mind-blowing** with Vim’s key bindings.

Even though Vim is a command-line interface (CLI) editor that lacks built-in features that IDEs or GUI text editors ships with, it is **extremely customizable**. There are a plethora of plugins and mappings that can be used to do anything your heart desires!

Vim is **almost guaranteed to be available on any Unix system** so the skills you learn will be portable. The idea of being able to SSH into a server and begin editing files right from the command-line is extremely appealing to me.

All this said, I still love using IDEs and GUI text editors when the situation calls for it. Maybe that will change once I become more proficient in Vim. Nonetheless, having a variety of tools under my belt is fantastic!

As a side note, I have been trying keep my hands on the [home row](https://www.computerhope.com/jargon/h/hrk.htm) to help improve my typing efficiency.

## Configurations

Since my configuration file is not too long (yet), I can show its entirety here.

I am putting a strict rule on myself that I can **only make modifications to the configuration file that I understand**.

```vim
" Do not try to be vi compatible (use awesome vim settings)
set nocompatible

" =============== Plugins ===============

" Specify a directory for plugins
call plug#begin('~/.vim/plugged')

" Syntax highlighting for Pug files
Plug 'digitaltoad/vim-pug', { 'for': 'pug' }

" Initialize the plugin system
call plug#end()

" =============== General Settings ===============

set number  " Show line numbers
set ruler   " Show file statistics (default to bottom right)
syntax on   " Turn on syntax highlighting

" =============== Indentation ===============

set smartindent     " Auto indent based on code syntax
set shiftwidth=4    " Set the number of columns indented with the reindent operations (<< and >>)
set softtabstop=4   " Set the number of columns indented when the 'Tab' key is pressed in insert mode
set expandtab       " Use spaces instead of tabs

" =============== File Explorer ===============

let g:netrw_banner=0    " Remove the file explorer banner
let g:netrw_winsize=25  " Set the width of the file explorer window to be 25% of the editor's width

" =============== Search ===============

set hlsearch    " Highlight search results
set ignorecase  " Search in a case-insensitive manner
set incsearch   " Search incrementally (show the position of the pattern as typing occurs)

" =============== Mappings ===============

" ===== Navigation =====

" Display error message when arrow keys are used in normal mode
nnoremap <Left> :echoe "Use h"<CR>
nnoremap <Right> :echoe "Use l"<CR>
nnoremap <Up> :echoe "Use k"<CR>
nnoremap <Down> :echoe "Use j"<CR>

" ===== Insertion and Deletion =====

" \d deletes without yanking in normal mode
nnoremap <leader>d "_d

" \d deletes without yanking in visual mode
vnoremap <leader>d "_d

" \p pastes without yanking in visual mode
vnoremap <leader>p "_dP

" ===== File Explorer =====

" Ctrl + e toggles file explorer
nnoremap <C-e> :Lexplore<CR>
```

I am not going to explain every line as I have comments for pretty much every setting. Furthermore, the documentation is much more precise than I could hope to be.

However, I would like to discuss the thoughts behind some of my choices.

### Plugin Manager

I decided to use [vim-plug](https://github.com/junegunn/vim-plug) because of its simple setup. Furthermore, it supports lazy loading of plugins for even quicker load times. I am sure that I will come to appreciate vim-plug’s many features when I begin customizing the editor more.

### File Explorer

I discovered that newer versions of the [netrw](http://www.vim.org/scripts/script.php?script_id=1075)  plugin that ships with Vim comes with a file explorer feature. This saved me from having to look for a plugin. I want to **use plugins only when it is necessary** to cut down on the overhead.

With the settings I have, I can toggle a file explorer window that is 25% of the editor’s width with two key presses.

I have only used the feature a few times because I felt that I could search for and open a file quicker myself. However, I do find it useful for viewing my directory in a tree structure.

### My First Mappings

My very first mappings (Insertion and Deletion section) came out of the frustration of having anything I deleted yanked at the same time. Moreover, I found out that I could only paste once because the editor was yanking whatever I was pasting over.

My second adventure with mapping was when I mapped `Ctrl + E` to toggle the file explorer window instead of having to type `:Lexplore`.

My most recent mappings (Navigation section) is to force myself to not use the arrow keys in normal mode. I am allowing myself to continue their usage in insert mode *for now*.

## Closing Thoughts

I am absolutely a beginner with Vim so there is so much that I do not know about. If there is anything that I have done that seems counter-intuitive, it probably is. Feel free to point it out so that I can learn and improve my workflow.

Moving forward, I am going to continue to use Vim for personal projects. Even though I spend most of my time in insert mode, I learn a more efficient way of doing things pretty much every day. Looking forward to the day I can use Vim fluidly (possibly as my main editor)!

It would be pretty awesome if my editor produces code as quickly as I think about it!

Are there any key bindings and combinations that I should definitely learn in the beginning phases? What are some of your favorite mappings and why?
