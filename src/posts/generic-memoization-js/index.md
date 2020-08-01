---
title: "Generic Memoization in JavaScript"
date: "2018-02-04"
categories: ["development"]
tags: ["javascript"]
---

I just discovered something amazing called memoization through [Stephen Grider's course](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/).

As a side note, I highly recommend this course - even if you are not currently in the interview phase. This course provides a great introduction (or refresher) on algorithms that, in my opnion, will help you in your day-to-day work.

No, I am not being compensated for this recommendation. 🙂

## Memo - what?

Do not worry, I have extreme difficulty in saying the word as well.

[Memoization](https://en.wikipedia.org/wiki/Memoization) is a method of optimizing a process by caching the results of function calls. When the function is called again with the same argument(s), the previously calculated result is returned instead of performing the operations again.

This method of optimization is especially helpful in recursive solutions because of their nature. However, memoization can help reduce execution times for many other problems as well.

## Generic Memoization

The following function is a generic implementation for memoizing any function:

```javascript
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);

        cache[key] = result;

        return result;
    }
}
```

In essence, we are wrapping the original function and then storing the results of the original function for each unique argument(s). Subsequent calls to the original function with the same inputs will return the cached results.

We are utilizing `JSON.stringify()` because objects passed in as arguments will result in a key of `[object Object]`. As a result, different objects will be interpreted as the same key in the `cache` object.

Pay attention to how we are using the [rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) operators to allow the function to take in a variable number of arguments.

### Using memoize()

Lets say we constructed the following recursive solution to the problem of finding the n-th entry in the fibonacci series:

```javascript
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
```

We can optimize this function by replacing the original `fib()` function with its memoized version.

```javascript
fib = memoize(fib);
```

Running a quick test with [Jest](https://facebook.github.io/jest/), the original function takes around 10 seconds to calculate the 45th entry in the series. On the other hand, the memoized version takes **less than a millisecond**.

Keep in mind that the original recursive solution has an exponential time complexity so the execution time will drastically increase for larger numbers.

## Closing Thoughts

So, are you as amazed as I am by the concept of memoization?

Nonetheless, I hope you found the generic memoization function useful. You can go ahead and apply this method to any of your existing functions to help decrease execution time.

Just remember that using this function does create an overhead (increased space complexity) due to the caching system. You will probably only want to utilize memoization if you know that there will be repeated function calls with the same inputs often.

Also, you can reduce the amount of memory used by limiting the cache to only store a certain number of results before overridding!
