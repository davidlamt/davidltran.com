---
title: "Transforming Object Values in JavaScript"
date: "2018-08-26"
tags: ["development"]
---

Recently, I ran into a situation where we needed to stringify an object's values to pass into webpack's [DefinePlugin()](https://webpack.js.org/plugins/define-plugin/).

In Lodash, there is a [mapValues()](https://lodash.com/docs#mapValues) utility that will accomplish this. However, I found a way to achieve the same result using a bit of ES6.

## Solution

```js
const yourObject = { /* ... */ };
Object.entries(yourObject).reduce((obj, [key, value]) => {
  // Do your stuff here...
  return obj;
}, {});
```

For instance:

```js
const envVars = {
  API_TOKEN: 'someRandomHash',
  PRODUCTION: true,
  VERSION: 25,
};

const transformedEnvVars = Object.entries(envVars).reduce((vars, [key, value]) => {
  vars[key] = JSON.stringify(value);
  return vars;
}, {});
/*
{
  API_TOKEN: "\"someRandomHash\"",
  PRODUCTION: "true",
  VERSION: "25",
}
*/
```

### Analysis

First, we call [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) with the object to retrieve an array of arrays containing the object's key and value pairs.

As an example:

```js
const person =  {
  name: 'Tom',
  age: 25,
};

Object.entries(person);
// [ ["name", "Tom"], ["age", 25] ]
```

Afterwards, we chain [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to transform each value.

We create a new object, using reduce's aruments, to contain the transformed object:

```js
/* ... */.reduce((obj, /* ... */) => /* ... */, {});
```

In the callback function's second argument, we [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the key and value out of each array, respectively:

```js
/* ... */.reduce((/* ... */, [key, value]) => /* ... */, {});
```

At this point, we can transform both the key and the value however we want and assign them to the _accumulator_ object.

**Remember to return the accumulator object at the end of the function!**

## Final Thoughts

While external utilities are definitely helpful, it may not always be the best approach to reach for them every time. If time allows, I believe it is good to evaluate the utility and see if it is possible to accomplish the task without it.

There are several reasons behind this thought: security, performance, etc. Even if the utility will be used, it would be beneficial to see what it is doing internally. You may learn new concepts and approaches from the implementation.

Always consider yourself a student and strive to be better!
