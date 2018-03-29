---
title: "Styled Components Delayed Loading Issue in Gatsby"
date: "2018-03-29"
tags: ["development"]
---

I was recently introduced to [Styled Components](https://www.styled-components.com/) when I took Scott Tolinski's [course](https://www.leveluptutorials.com/tutorials/pro-gatsby) in preparation for [updating my site](/blog/migrating-to-gatsby-and-netlify).

While my experience with Styled Components is limited, it has been a real joy to work with. I have some thoughts that I will share in a future post!

For now, let's get to the issue at hand.

When developing with Gatsby locally (`gatsby develop`), everything seems to be okay. On the other hand, when I tested the built site locally (`gatsby build` and `gatsby serve`), the CSS seems to be loaded after the content. This issue also occured when I pushed my built site to Netlify.

This resulted in the initial load (and on refreshes) displaying the content without styling for a brief moment before the styles are applied. In my opinion, this is a jarring issue - especially if the user's connection takes a bit longer to load the style assets.

## The Problem

After spending an undisclosed amount of time trying various, unsuccessful, "solutions", I finally decided to check the Network tab in the Chrome Develper Tools. 

What I discovered was that the initial page did not load with the styles I applied using Styled Components. Within the Network tab, I took a look at the page ("localhost" when testing locally). The Preview tab showed the unstyled content and the Response tab was void of the styles I used.

Okay, so, the styled components were not bundled with the initial load. Why?

## The Solution

To be completely honest, I am not absolutely certain why the following procedure works.

The fix is actually quite simple, I just needed to install the [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/) package and add it to Gatsby's configuration file.

To install with npm, just issue the following command inside your project's directory:

```bash
npm i gatsby-plugin-styled-components
```

Afterwards, add the plugin to your configuration file:

```javascript
// gatsby-config.js

module.exports = {
  // ...
  plugins: [
    // ...
    'gatsby-plugin-styled-components'
  ]
}
```

Make sure to rebuild your site afterwards!

As stated above, I am not entirely sure how this solves the issue internally. Taking a look at the description of the plugin, it seems that the plugin renders the styles server-side instead of client-side?

Maybe it is as simple as that. If you have a better explanation, please let me know! We should all strive to understand *why* solutions work!

## Closing Thoughts

Actually, this package was installed and configured within the course I took. I just made a stupid mistake of not noticing it when creating my own site.

Also, maybe next time, I will utilize the useful debugging tools at my disposal instead of fruitlessly trying random things.
