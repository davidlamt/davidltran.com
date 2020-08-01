---
title: "Migrating to Gatsby and Netlify"
date: "2018-03-27"
categories: ["Development"]
tags: ["gatsby", "netlify"]
---

Migrating the blog [again](/blog/migrating-from-wordpress-to-hugo)??

Yup.

This is the third time my blog has drastically changed in the past year. Am I constantly unhappy with the work I put into my blog?

Well, not exactly. However, nothing would change if I was happy, right? I believe that there has to be *some* discontent when things change.

I consider my site a playground for experimenting with new technologies and methodologies. I love to learn new frameworks and techniques but I always have trouble applying them to projects.

Even if I am (somewhat) content with the current state of my blog, I can envision all the awesome features I can implement with my newfound knowledge. **This site, itself, serves as an outlet for my creativity**.

I must say that working with [Gatsby](https://www.gatsbyjs.org/) has been a real joy and I can foresee myself staying with this static site generator for years to come. Though, we'll just have to see whether I hold onto that belief!


## Gatsby

I discussed why I decided to move from a dynamic CMS like WordPress to a static site generator in a [previous post](/blog/migrating-from-wordpress-to-hugo).

I will just list the main points in a TL;DR manner:

- Simplicity
- Security
- Maintenance
- Speed

I was drawn to Gatsby specifically because it utilizes React. I have had some experience using React but I wanted to improve my knowledge of it. Furthermore, I have been hearing a lot about [GraphQL](http://graphql.org/) [lately](/blog/podcasts-to-listen-to-in-2018). In Gatsby, data is pulled in using GraphQL.

Rebuilding my site with Gatsby would be a great introduction to these technologies that I was already set on learning.

### Development

It would be remiss of me not to mention Scott Tolinski's awesome [Pro Gatsby course](https://www.leveluptutorials.com/tutorials/pro-gatsby). This course taught me nearly everything I needed to build the site you see.

Scott's course also introduced me to [styled components](https://www.styled-components.com/). I have many good things to say about this method of writing CSS (maybe I haven't used it long enough to see the downsides). But, I will withhold my thoughts for future posts!

From what I can tell, the development process of Gatsby sites is as smooth as Hugo's process.

I have to give a standing ovation to the GraphiQL editor integration with Gatsby. This editor made testing GraphQL queries very easy and significantly reduced my development time.

Again, I had to transfer my content to Gatsby. However, this process was not so painful since the content were already written in Markdown. I just had to update the meta data (written in YAML) and fix some linking issues within the content.

Out of all three iterations of my site, I have to say that this iteration was the most hands-on. I used prebuilt themes for the other versions while not having a deep understanding of how the cogs turned.

Not to say that I now have deep knowledge of React, GraphQL, and Gatsby. However, I do feel like I have a good understanding of the internals of my site and would feel comfortable modifying it in the future.

### Theme

The look and feel you are currently experiencing is **largely** inspired by Sean Washington's [personal site](https://seanwash.com/). I really liked how simple and intuitive his site was and wanted to convey something similar with mine.

Somehow, each iteration of my site is more simple than the last. My tastes are constantly changing but I feel as if they are converging towards simplicity. I like how clean and accessible this project turned out!

### Dynamic Content

If you had been around before this migration, you will have noticed that the email subscription box and comments section has vanished.

I love the connection that comes with dicussing a particularly interesting blog post (which is all my posts). This is why I previously used Disqus to faciliate comments.

I may or may not have removed the comments section because I wanted my blog to look as clean as possible. Also, I believe that these discussions can also take place on a more well suited platform (like [Twitter](https://twitter.com/davidlamt)).

As for the email subscription form, I had used MailChimp since I was serving a static site with no back-end.

To be honest, I had only one subscriber to my email list. It was my girlfriend. 🙂

Anyhow, Netlify now offers [form handling](https://www.netlify.com/docs/form-handling/) if I do want that feature in the future.

## Netlify

Oh man, how I wish I would have discovered [Netlify](https://www.netlify.com/) sooner.

This service made setting up automatic deployment and HTTPS so easy. I "configured" (clicked a button) Netlify to automatically rebuild and deploy my site when changes are pushed to the master branch on my site's [GitHub repository](https://github.com/davidlamt/davidtranscend-com-gatsby).

Long gone are my days of setting up webhooks to automatically pull in changes and rebuild my site.

There is also a one-click option for adding free HTTPS support to your site. You heard that right: *FREE* TLS certificates with Let's Encrypt that are automtically renewed. I also used Let's Encrypt on my previous site but I had to set up a Cron job to keep the certificates updated.

Netlify also deploys your site to a global CDN that allows your users to access your sites more quickly.

I forgot to mention that I am hosting my site **for free**. Yup, I am receiving all the aforementioned features for free. This is because Netlify has a ridicuously awesome free tier.

You can also easily add content to your site using [Netlify CMS](https://www.netlifycms.org/). This provides a user-friendly "back-end" to modify your site's data. I will continue writing content in Markdown because I find it enjoyable but I may implement this in the future.

## Closing Thoughts

Hope you enjoyed reading my non-sponsored post praising Gatsby and Netlify. Gatsby and Netlify, please sponsor me. 🙁

Overall, I had a fantastic time recreating my site with these new, great technologies. I now have a better understanding of these tools and I hope to continue using them in future projects!

There is one feature I miss from Hugo and WordPress: scheduling posts. I have not been able to find a way to schedule posts to publish in the future with Gatsby and / or Netlify. If you have any ideas, please reach out!

Again, I would like to credit [Sean Washington](https://seanwash.com/) for my site's design. Check him out for great design and development ideas and thoughts!

What are your thoughts on Gatsby and Netlify? In your opinion, what are some downsides of static site generators that I have failed to mention?
