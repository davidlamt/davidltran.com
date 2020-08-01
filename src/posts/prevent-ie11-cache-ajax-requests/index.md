---
title: "Preventing IE11 from Caching AJAX Requests"
date: "2018-10-15"
categories: ["Development"]
tags: ["http"]
---

It seems that some versions of IE11 caches all AJAX requests. While this could be useful, in my opinion, this "feature" seems more harmful than advantageous.

You may discover this issue when taking a look at the IE developer tool's Network tab and noticing that a request's response was "from cache".

Or, more likely, you will spend hours stepping through source code trying to determine why your requests keep resulting in the same data even though you know it should be different.

## Problem

The issue is that certain IE11 versions cache AJAX requests and when it sees the same request being issued, it will just return the previous response even if the entity was modified on the server. Your subsequent requests will never actually hit the server.

For example:

```json
GET /api/users/david
{
  isCool: true
}

PATCH /api/users/david
{
  isCool: false
}

GET /api/users/david
{
  isCool: true
}

GET /api/users/david
{
  isCool: true
}
```

### Server Side Solution

If you have access to the server side code, [this is the ideal solution](https://support.microsoft.com/en-us/help/234067/how-to-prevent-caching-in-internet-explorer).

You will want to send along these headers with _every_ response:

- `Cache-Control: no-cache`
- `Pragma: no-cache`
- `Expires: -1`

### Client Side Workaround

If server changes are out of the question at the moment (or indefinitely), you can apply a "cache buster" to each request you send on the client side.

For instance, you can apply a unique query parameter to each request:

```js
const cacheBuster = {
  _ts: Date.now(),
};
```

The requests you send will still be cached but IE11 will not be able to reuse responses because every request is unique.

## Final Thoughts

While I do not know the motivations of this implementation, I know for certain that this causes confusion in the developer community. Other browsers do not cache requests and we have come to expect the same of any browsers we develop for.

Whether this decision is a good or bad idea is up for debate. Change is a complex subject because it always be faced with criticism.
