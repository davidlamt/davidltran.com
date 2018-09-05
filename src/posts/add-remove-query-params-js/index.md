---
title: "Adding and Removing Query Parameters in JavaScript"
date: "2018-09-04"
tags: ["development"]
---

What is the best approach to adjusting parameters in a query string in a safe and reliable manner?

There is a fantastic native [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API that can aid with this. Unfortunately, at the time of this post, it is [not supported by some browsers](https://caniuse.com/#feat=urlsearchparams) (dang it, IE11). However, if the browsers you are developing for are supported, I would recommend this solution over the others we'll go over.


## Solution

```js
import querystring from 'querystring';

const adjustQueryParams = (str, { add = [], remove = [] } = {}) => {
  const qs = querystring.parse(str.replace(/\?/g, "");
  const params = [];

  for (const [key, value] of Object.entries(qs)) {
    if (!remove.includes(key)) {
      params.push(`${key}=${value}`);
    }
  }

  return [ ...params, ...add ].join('&');
};
```

Special thanks to one of my colleagues for helping improve the first iteration of the utility to be more reusable and extensible.

### Analysis

Here, we are using the [querystring](https://github.com/Gozala/querystring#readme) package to handle parsing the existing query string.

My first inclination was to create my own [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that would divvy up the query parameters into some sort of data structure. However, I felt wary towards this approach because I know that I could very easily miss some edge cases.

Furthermore, the package supports Internet Explorer. Yay!

Simple example of how `querystring` would be used:

```js
querystring.parse("env=prod&debug=false"); // { env: "prod", debug: "false"  }
```

We are removing all instances of "?" before parsing (`str.replace(/\?/g, "")`) since most query strings begin with a "?" (`window.location.search`). This would cause the first key to contain a "?" (`{ ?env: "prod" }`).

We then iterate through the parsed object containing the query parameters using the [for...of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), and [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).

```js
// qs = { env: "prod", debug: "false"  }

for (const [key, value] of Object.entries(qs)) {
  // First iteration: key = "env", value = "prod"
  // Second iteration: key = "debug", value = "false"
}
```

We then check if the current `key` is in the list of query parameters to remove (`remove`) using [Array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). If it is not in the removal list, add the formatted query parameter to the `params` array.

```js
if (!remove.includes(key)) {
  params.push(`${key}=${value}`);
}
```

Continuing with our example and if `remove = ['debug']`, `params` would equal `['env=prod']`.

At the end, we push on any query parameters we want added and join all the query parameters with an "&":

```js
return [ ...params, ...add  ].join('&');
```

For instance,

```js
// params = ['env=prod']
// add = ['track=true', 'notifications=false']

[ ...params, ...add ].join('&') // 'env=prod&track=true&notifications=false'
```

## Final Thoughts

If you wanted to update the query string in the URL, a possible solution could use the above approach on the [window.location.search](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search) string and then applying it with [window.history.replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API).
