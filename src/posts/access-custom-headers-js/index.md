---
title: "Accessing Custom Headers in JavaScript"
date: "2018-04-23"
tags: ["development"]
---

Have you heard about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) before?

I have ran into the term mutltiple times during my career but I have never taken the time to try to understand it.

To me, it was just a nuisance that would be taken care of with a quick trip to Stack Overflow. In my opinion, using Stack Overflow is perfectly valid but **not understanding the solution is doing a disservice to yourself**.

This time, I took the opportunity to dive a bit deeper into the topic when I ran across a related problem.

## What Makes Me Cry (The Problem)

I am working on a user story that makes trips to an API endpoint that returns custom headers. Like how vague that was? Best to throw caution to the wind in the hopes of avoiding any legal issues. 🙂

Anyways, the issue that occured was that I could not retrieve the custom headers from the HTTP response programmatically with JavaScript. However, I was able to see the custom headers when viewing the request / response in the Chrome DevTools.

What gives?!?

## What Makes Me Smile (The Solution)

Several Stack Overflow answers later (I need to improve my query game), I found out that this was an issue with Cross-Origin Resource Sharing (CORS).

### CORS

Cross-Origin Resource Sharing is exactly what it sounds like. CORS is when make a request from a different domain, protocol, or port than the one you are on.

For instance, requesting `https://mysite.com/api/users` from `https://anothersite.com` is considered cross-origin. On the other hand, requesting `https://mysite.com/api/users` from `https://mysite.com/app` is considered to be from the same origin.

From what I understand, the CORS mechanism was created as a security measure. Cross-origin requests are usually restricted unless the server set specific rules.

In my case, the response headers I wanted to grab were unavailable as I was making the request from a different domain.

I recommend the [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on CORS for a much more detailed explanation.

### Exposing Headers

The solution could be fairly simple depending on your situation.

The most ideal way to resolve this problem would be to add the custom header(s) to the [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) list on the server.

If you have access to the server, this is fantastic. Otherwise, you're out of luck.

Just kidding!

There are several workarounds if you cannot modify the server's source code. One solution would be to create a proxy server on the same domain that your application will run on. You could utilize a package like [cors-anywhere](https://www.npmjs.com/package/cors-anywhere).

There are also services out there that will act as a proxy for you. However, I tend to stay away from these as you do not have full control over them. Creating your own proxy is a bit more involved but provides more flexibility and control.

## Closing Thoughts

Now that I think about it, this issue is not only limited to JavaScript. This problem will occur when you try to retrieve custom headers in any language when the headers are not properly exposed.

Well, whatever. I did run into this issue when I was working with JavaScript. At least this post provides a language-agnostic approach!
