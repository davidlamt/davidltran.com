---
title: "Migrating from WordPress to Hugo"
date: "2017-08-20"
categories: ["Development"]
tags: ["hugo", "thoughts"]
---

*Note*: I have migrated this blog to [Gatsby](/blog/migrating-to-gatsby-and-netlify)!

Do you notice anything new?

Of course not. No one follows my blog so this switch to a new domain and theme does not matter. 🙁

This is my attempt at making everything more simple and content-focused. Also, I finally converted my [main site](/) (and subsequently, this blog) to use HTTPS!

In this post, I will talk about some of my reasons for switching away from WordPress to a static site generator. I will discuss technical details in a future post so stay tuned!

## Why Use a Static Site Generator?

First, a static site generator is exactly what it sounds like. It takes a collection of content files and generates the static HTML, CSS, etc. files that formats and displays that content.

I started out using WordPress and I still believe it is a great platform but I am beginning to feel bogged down by its complexity. I do not think that it is overly complex but I do believe that **it over complicates things for my particular needs**.

All I want is a simple way to publish content about my software development journey, among other adventures. Sure, WordPress can certainly do this but it can **also do much more** (which is not always a good thing).

### Simplicity

A site generated using a static site generator is usually a combination of content written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and a theme.

Writing in Markdown **lets me focus more on the content rather than formatting**. The default WordPress editor is a [WYSIWYG](http://whatis.techtarget.com/definition/WYSIWYG-what-you-see-is-what-you-get) editor, which is great but is an overhead for me as I only need to format simple hierarchical content.

Furthermore, I can write Markdown in my favorite editor. I am currently using [Atom](https://atom.io/) with a [Vim plugin](https://atom.io/packages/vim-mode-plus). With my basic knowledge of Atom shortcuts and Vim key bindings, I rarely have to touch my mouse.

Did I mention that I am now able to edit locally? The default WordPress editor ties you down to editing online but Markdown can be written almost anywhere!

### Security

[WordPress powers around 30% of all CMS-based websites on the internet](https://trends.builtwith.com/cms).

Being this popular does not come without some drawbacks. The volume of users is especially appealing to hackers trying to steal information. As a result, **WordPress websites are often the victim of security breaches**.

Furthermore, many website owners are at risk for having older versions of WordPress and plugins that are unable to defend against the more recent attack strategies.

A static site does not have some of the security concerns that a WordPress site brings. One reason is that not as many people use static sites when compared to WordPress so the potential gain for hackers is mitigated.

Also, *pure* static sites do not rely on databases. WordPress sites depend on databases to hold the site's content and **databases are inherently vulnerable**.

### Maintenance

In addition to keeping plugins up to date with a WordPress site, you will also want to store backups of your site in case anything happens.

While this task can be simplified by using a plugin, you are already creating a backup when you write in Markdown on your local environment.

Moreover, you may also have multiple copies of your content if you store it on a remote repository like GitHub.

Let's not forget there is also a copy on your live server!

Additionally, having content written in Markdown will make it easy to swap themes and even switch static site generators.

### Speed

WordPress sites serve content to visitors by querying the database for the information for the page that the visitor is requesting. Once the information is retrieved, the server will also need to generate the page.

While this process is quick for most visitors, it adds more layers that need to be overcome before the information is rendered for the visitor.

On the other hand, static sites already have all the content ready to serve as it was pre-generated before the visitor even typed in your domain in their browser.

*Servers* are great at *serving* static content so the visitor will be able to read your fantastic post even faster.

## Why Hugo?

As you might have guessed, [Hug](https://gohugo.io/) is a static site generator.

There are many other static site generators like [jekyll](https://jekyllrb.com/) and [Hexo](https://hexo.io/).

So why did I choose Hugo?

### No Dependencies

Many static site generators require other dependencies. Having dependencies increases the maintenance factor and I wanted a solution that was simple so I could just focus on writing great content. Like this post, of course. 👍

Hugo only requires a single binary to be installed and has no external dependencies.

As a result, the installation process was easy. All it took was one command for me. ~~I am lazy so I was pretty much sold at this point.~~ I am determined and motivated so this fact did not faze me (looking at you, future employers). 🙂

### Quick Generation

I do not have experience with other static site generators but users have stated that Hugo's generation process is blazingly fast.

Apparently, **sites with hundreds of pages can be generated in less than a second**.

Count me in.

Of course, there are many factors that play into generation speed so your mileage will vary. At the time of this post, **this site is generated in about 83ms**.

### Preview

As previously stated, I do not have experience with other static site generators so I can only speak on behalf of Hugo.

Hugo has a fantastic preview feature that starts a server on your development environment and watches for changes. I can see how my content will be formatted without ever leaving my editor.

This was a huge pain for me with the default WordPress management system. I had to click multiple times to see my changes. [Vim has trained me to become a keyboard enthusiast](/blog/using-vim-for-a-week).

## Caveat

Static sites are *static*.

Wow! What a revelation, right?

Because of the static nature, it may be difficult to include dynamic content such as relevant posts or a comment system.

This blog is just displaying the next and previous posts as suggestions. As for the comment system, I am using [Disqus](https://disqus.com/).

From my viewpoint, I had three options for comments:

1. Have no comments.
2. Roll my own system to save comments in the Markdown file itself.
3. Using a third party comment system.

I like the idea of diving into further discussions about the topic with others so option one was out. Option two would have been time consuming and it would be like reinventing the wheel.

I understand that creating my own system to keep everything static would let me have total control over my entire blog but having a third party handle comments was not a deal breaker for me.

Option three it is!

## Continuous Integration

This actually may be the main deciding factor why I switched over to Hugo (or a static site generator in  general).

I saw that some other people had their content stored on GitHub and had a system where a push to the master branch would update their site.

I thought this was extremely cool. And I wanted to be cool. And here we are.

Anyhow, I was able to create a similar setup and I will be discussing that process in detail in a future post.

Here is a preview: This blog is hosted on a DigitalOcean droplet and the server checks whether the blog should be updated every day at midnight based on the [blog's GitHub repository](https://github.com/davidlamt/personal-blog).

## Transferring Content

I was thinking about using some sort of software to transfer my WordPress content to Markdown but ultimately decided to do it manually.

One reason was that there seemed to be many issues with those solutions and I was particularly worried about my posts. I used [Thrive Theme's Content Builder](https://thrivethemes.com/contentbuilder/) to format my content on WordPress so the process may have been more difficult.

I am certain that I could get it to work eventually but I figured that transcribing the posts myself would not have been too agonizing since I only had 16 posts.

There is also the reassurance that once converted, these Markdown files can be used with other static site generators as well. The files can probably be used with other systems as well since they just contain content, after all.

## Redirecting

My previous blog was already ranking in Google, although not that well. I wanted to keep the link juice and also have anyone (no one) looking for my blog be redirected to its new home.

I was able to perform a [301 permanent redirect](https://css-tricks.com/snippets/htaccess/301-redirects/) so hopefully Google updates my pages on their search engine soon!

## Closing Thoughts

I may not know all the benefits and disadvantages of using a static site generator, but I am choosing to use it based on the aforementioned points.

I feel that Hugo fits the needs of my personal blog well and also makes writing content more enjoyable.

I know it may seem like I was bashing WordPress in this post but that is not my intention. Like I mentioned before, I think that WordPress is a great platform.

I would definitely consider using it for future projects if I need a more feature-rich and dynamic CMS-based site.

All in all, this was actually quite a long process and I ran into many issues but it was exhilarating when everything came together. Be on the lookout for a technical post about this migration soon!

What are your thoughts on static site generators? Do you have a particular one you prefer and if so, why? Also, when would you consider switching from a static site generator to WordPress or another similar CMS?
