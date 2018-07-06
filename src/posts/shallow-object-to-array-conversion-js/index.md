---
title: "Shallow Object to Array Conversion in JavaScript"
date: "2018-07-05"
tags: ["development"]
---

Let's say you have an object and you wish to convert it into an array.

For instance, you want to make the following transformation:

```js
{
  1: {
    name: 'Tim',
    age: 99,
    sex: 'M',
  },
  2: {
    name: 'Kim',
    age: 99,
    sex: 'F',
  },
}

// =>

[
  {
      name: 'Tim',
      age: 99,
      sex: 'M',
      id: '1',
  },
  {
      name: 'Kim',
      age: 99,
      sex: 'F',
      id: '2',
  },
]
```

## Solution

You can use the following snippet for a shallow transformation:

```js
const people = { /* above object */ };

Object.entries(people).map(([id, attributes]) => ({ ...attributes, id }));
```

Let's dissect this a bit.

[Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) returns an array of arrays containing the object's key / value pairs.

```js
const test = {
  a: 1,
  b: 2,
};

Object.entries(test); // [ ['a', 1], ['b', 2] ]
```

Using our `people` example, we will have the the following:

```js
Object.entries(people);
/*
  [
    [ '1', { name: 'Tim', age: 99, sex: 'M' } ],
    [ '2', { name: 'Kim', age: 99, sex: 'F' } ],
  ]
*/
```

We then [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over each array element (an array itself) and transform the data using the anonymous [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```js
/* ... */.map(([id, attributes]) => /* ... */)
```

Inside of the arrow function's parameter list, we are destructuring the input array into two variables. Note that there is an extra set of parathensis around the destructuring statement. This is required when destructuring an array or an object using the arrow function format.

Following with our example, the arrow function will be called twice.

```js
// First iteration:
id = '1';
attributes = {
  name: 'Tim',
  age: 99,
  sex: 'M',
};

// Second iteration:
id = '2';
attributes = {
  name: 'Kim',
  age: 99,
  sex: 'F',
};
```

Inside of the arrow function's body, we a implicitly returning a new object containing all of the `attributes` and the `id`.

```js
/* ... */.map(/* ...*/ => ({ ...attributes, id }));
```

Here, we are taking advantage of the arrow function's implicit return feature. If we exclude the brackets containing the function body, the statement is evaluated and returned automatically.

In the case that we want to return an object, we must wrap the object with parentheses to distinguish it from function brackets.

## Closing Thoughts

In our example, we are including the object's key in our new object. This may be useful when we have a hash map, where the key is a hash value. [Firebase](https://firebase.google.com/) stores some data in a hash map and when retrieving the data via JavaScript, it is in object format.

However, if the key does not matter in your situation, you may want to use [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values).

Keep in mind that these solutions are shallow conversions, they only transform the first layer. You may want to look into recursion if you want a deep transform.
