---
title: "How to Create an Archives Page with Hugo"
date: "2017-09-10"
tags: ["development"]
---

*Note*: I have migrated this blog to Gatsby!

I have recently added an [archives page](/archives) to my blog.

I wanted visitors to be able to find posts on my blog more easily. I found myself looking for more posts when visiting other blogs, especially if I enjoyed the entry post.

Before this addition, my previous content could only be accessed by moving through pages. I have the pagination setting set to show only five posts per page.

My blog does contain categories (check out the menu) but the category pages are still limited to five posts per page.

Of course, I can increase the pagination limit but I do not want to clutter each page with numerous posts. Furthermore, increasing the number of posts per page would increase the load time.

## The Goal

What I wanted to achieve was to have simple page that showed all my posts grouped by year.

Pretty basic, right?

However, I believe that, sometimes, **less is more**.

Even if you do not appreciate the style I chose, the following sections can be generalized to create whatever your heart desires!

Maybe I should consider switching careers to a salesman. I am quite fantastic at pitching, right? 🙂

### Options

While researching for ways to accomplish what I wanted, I found a couple options.

One way was to leverage Hugo's [taxonomy feature](https://gohugo.io/content-management/taxonomies/).

However, it seemed that doing things this way would require that I go back and edit all my existing posts. 

As you may or may not know, I am quite ~~lazy~~ determined.

Luckily, I found a way to create an archives page without having to edit any previous content!

## Linking Content to Template

I would like to mention that the theme and the configuration language you use may be different but you can defintely apply these concepts according to your setup.

First, I created a new content file at the root of the ```content``` folder:

```bash
hugo new post/archives.md
```

This file is created so that my archives would be located at the ```/archives``` subdirectory (URL).

Next, I created a template file that the previous Markdown file will use. I added an ```archives.html``` file to the ```layouts/page``` folder for my theme.

In order to link these two files, I added the following configuration to ```archives.md```:

```yaml
layout: "archives"
```

I also added a few other configurations to my ```archives.md``` like ```noauthor```, ```comments```, etc. in order to remove unnecessary features.

## Template

Let's take a look at the template code and then dissect it!

```handlebars
<main class="content" role="main">
    <div class="inner">
        {{ range (.Site.RegularPages.GroupByDate "2006") }}
            <h3>{{ .Key }}</h3>

            <ul class="archive-list">
                {{ range (where .Pages "Type" "post") }}
                    <li>
                        {{ .PublishDate.Format "02 Jan" }}
                        - 
                        <a href="{{ .RelPermalink }}">{{ .Title }}</a>
                    </li>
                {{ end }}
            </ul>
        {{ end }}
    </div>
</main>
```

This is just a snippet of the entire file but it is the most important part. You can view the source code for the entire file [here](https://github.com/davidlamt/hugo-theme-casper/blob/master/layouts/page/archives.html).

```handlebars
{{ range (.Site.RegularPages.GroupByDate "2006") }}
    <h3>{{ .Key }}</h3>
    ...
```

This section is iterating through all pages and grouping them by year.

The ```h3``` is then displaying the year before we iterate through each item in the group.

Also note that we are using ```.Site.RegularPages``` instead of ```.Site.Pages```. When I used ```.Site.Pages```, there was an additional item called "Posts".

```handlebars
<ul class="archive-list">
    {{ range (where .Pages "Type" "post") }}
        <li>
            {{ .PublishDate.Format "02 Jan" }}
            - 
            <a href="{{ .RelPermalink }}">{{ .Title }}</a>
            ...
```

This snippet loops through each page of the yearly groups we created above.

I am filtering the pages for posts. Without this, I would end up displaying my about page as well.

Afterwards, I display the post's title and its publish date with a separator in between.

And that is pretty much it!

The framework for an archives page is quite simple but you can customize it endlessly to fit your needs. 

## Design Decisions

In this section, I just want to touch upon some of the reasoning behind why my archives page is as it is.

### Simplicity

Like I mentioned previously, my goal was to just have a simple page for visitors to easily access any of my posts.

I chose to forgo including each posts' corresponding category because I already have dedicated category pages.

Summaries are not included because if I choose my titles well, they should encompass what the content will be about. I may be putting too much faith in my ability to create great titles.

In a way, my archives page serves as a basis for a **rudimentary search feature when combined with the user's own search method** (e.g. Ctrl + F).

### The Font

I am certain that you have noticed the difference in fonts when visiting my archives page.

I am using the following font family for that page:

```css
font-family: Inconsolata, monospace, sans-serif;
```

The first two fonts are used because they give each character the same spacing. This means that no matter what the charactes are, the one directly below it will be aligned perfectly.

In my opinion, this suits an archives page well because it creates uniformity and that makes it easier to read each entry.

## Closing Thoughts

If you have not viewed my archives yet, what are you doing? 

[Here is the link again](/archives).

Now you can ~~criticize~~ compliment it.

I hope that the short code snippet and explanation helps you customize your own archives page. Feel free to view the [source code](https://github.com/davidlamt/hugo-theme-casper/) for my entire blog and use it to customize your own!

What do you think about not having a search function on a blog? Do you think that having an archives page could make up for it?