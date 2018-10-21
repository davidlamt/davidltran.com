---
title: "Checking If a Primitive Array is Unique in JavaScript"
date: "2018-10-21"
tags: ["development"]
---

Looking for a way to check verify that your primitive array does not contain duplicates without reaching for a third-party package?

No problem, ES6 allows for a simple solution.

Note: This solution only works for primitive arrays. For arrays containing objects, you may want to do a "deep" check using recursion.

## Solution

```js
const arr = [ /* ... */ ];
const isUnique = (new Set(arr)).size === arr.length;
```

Yup, that is it.

### Analysis

Here, we are passing in our array to the [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) constructor. The constructor converts the Array object into a Set object.

The Set object differs from an array because it only allows the storage of unique values. As a result, when we construct a Set from our array, all duplicate values are removed.

```js
const arr = [1, 2, 2, 3, 3];
new Set(arr); // Set: [1, 2, 3]
```

Finally, we check if the new Set's size is equal to the size of the original array. If the sizes are the same, this means that the original array is unique as no duplicates were removed.

```js
const arr = [1, 2, 3]; // length: 3
const set = new Set(arr); // size: 3
isUnique = set.size === arr.length; // true
```

## Final Thoughts

The time complexity of this solution is probably similar to creating a dictionary, iterating through each element, and checking if that element has been seen before. However, this approach provides an abstraction that, in my opinion, is easier to read.
