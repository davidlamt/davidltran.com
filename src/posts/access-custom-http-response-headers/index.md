---
title: "Accessing Custom HTTP Response Headers"
date: "2018-04-23"
categories: ["Development"]
tags: ["http"]
---

I am working on a user story that makes trips to an API endpoint that returns custom headers. Like how vague that was? Best to throw caution to the wind in the hopes of avoiding any legal issues. 🙂

Anyways, the issue that occured was that I could not retrieve the custom headers from the HTTP response programmatically with JavaScript. However, I was able to see the custom headers when viewing the response in the Chrome DevTools.

What gives?!?

## Exposing Headers

Several Stack Overflow answers later (I need to improve my query game), I found out that this was an issue with the response headers being restricted.

The solution could be fairly simple depending on your situation.

The most ideal way to resolve this problem would be to add the custom header(s) to the [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) list on the server.

By default, only six simple response headers are exposed. Any other headers that you want clients to have access to needs to be added.

If you have access to the server, this is fantastic. Otherwise, you will need to communicate with the server team to modify this response header.

## Closing Thoughts

Now that I think about it, most of the web APIs I have worked with return data in the response body. I believe this is the first time I am working with custom data in response headers.

An interesting point that I will have to do research on is the best practices for using a response body versus a response header (or both).
