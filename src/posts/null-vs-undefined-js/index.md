---
title: "null vs undefined in Javascript"
date: "2018-05-14"
tags: ["development", "thoughts"]
---

What are the differences between these two seemingly interchangeable constructs?

Looking for a leg up on the competition in the job market? Eyeing that raise that you have been so deserving of? Angry at those know-it-all team members? For the single price of $19.99, show the world, and your peers, who is superior!

Just kidding. However, I do hope to convey the differences well enough in this post so that you can confidently ace that next interview!

## What Is null?

I like to think of `null` as **an intentional absence of value**. A `null` value **must** be assigned as it is not the default state for any variable type.

```js
const val = null;

console.log(val); // null
```

## What Is undefined?

`undefined` is most commonly used to **indicate that a value is absent unintentionally**. Variables that are declared (but not defined) are given an `undefined` value.

```js
let val;

console.log(val); // undefined
```

Note that we are declaring the variable with `let` instead of `const`. This is because `const` declarations must be accompanied by an assignment. In other words, `const` *declarations* are invalid and they are better referred to as `const` *definitions*.

We can also set a variable to undefined. However, this may not be ideal since `null` is better suited for setting a variable to "empty".

```js
const val = undefined;

console.log(val); // undefined
```

Furthermore, similar to undefined variables, nonexistent object properties and out of bound array indices will result in `undefiend`.

```js
const obj = {};

console.log(obj.val); // undefined

const arr = [];

console.log(arr[0]); // undefined
```

## Checking for null or undefined

A simple comparison will suffice for checking for a `null` or `undefined` value.

```js
if (val === null) {}

if (val === undefined) {}
```

We can also use a loose comparison (==) to check for either because they are both a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value.

```js
console.log(null == undefined); // true

console.log(null === undefined); // false - see next section!
```

Furthermore, because both values are falsy, a simple `!` check will do as well:

```js
if (!val) {} // Will check for both null and undefined
```

## Types

Both `null` and `undefined` are actually their own [types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

This is why a [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) fails - it checks the types first.

```js
console.log(typeof null); // "object"

console.log(typeof undefined); // "undefined"

console.log(null === undefined); // false
```

Yes, the type of `null` is actually an object. This is in the JavaScript specifications but some industry experts have pointed out that this is a mistake in the language's design. Either way, that is just the way it is as of now.

## A Pragmatic Example

Say we have the following function:

```js
function greet(greeting = 'hi') {
  console.log(greeting);
}
```

The above function accepts an argument but defaults it to `hi` if one is not supplied by the callee.

Let's see what happens when we invoke it in various ways:

```js
greet(); // hi

greet('HELLO'); // HELLO

greet(null); // null

greet(undefined); // hi
```

Default arguments will be applied when an `undefined` value is passed in but `null` does not have the same effect. This aligns with my statement that `null` is an *intentional* absence of value. In this case, we are *intentionally* telling the function that we want the argument to be empty.

## Closing Thoughts

The idea that `null` relates to intentionality reminds me of API calls that return an empty array instead of some "undefined" value when there are no results.

We are always looking for clues in code and the correct usage of `null` and `undefined` will help convey your intentions to future developers (maybe yourself)!
