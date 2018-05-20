---
title: "Generating a Range of Numbers in JavaScript"
date: "2018-05-20"
tags: ["development"]
---

Have you ever wanted to generate a range of numbers in JavaScript from 0 to a specified bound?

Let's say you wanted an array containing numbers from 0 to 3. In other languages, you may be able to do something similar to the following:

```js
range(0, 3)
```

Unfortunately, JavaScript does not natively support a similar construct. However, we can use can use a library like [Lodash](https://lodash.com/docs#range) or write our own implementation. In this post, I will go over implementing it ourselves.

## Keys and Spread

```js
const numbers = [...Array(4).keys()]

console.log(numbers); // [0, 1, 2, 3]
```

Let's dissect this.

`Array(4)` creates a new array with 4 empty slots. Calling `keys()` on the new array will return an array [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) that will [yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield) the key at each index. In an array, the key will be the index position.

Afterwards, we "consume" the iterator using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

There are a few caveats to this method that you need to be aware of. First, this method will always start at 0 so you cannot specifiy the lower bound without more manipulation. Similarly, the number you pass into `Array()` is inclusive; meaning that it is also included in the range.

## A Cool Trick

What if you could just do this?

```js
const numbers = [...3]

console.log(numbers); // [0, 1, 2, 3]
```

Well, you can! Here's how:

```js
Number.prototype[Symbol.iterator] = function *range() {
  for (let i = 0; i <= this; i++) {
    yield i;
  }
}
```

Here, we are modifying the iterator property on the `Number` prototype. We are assigning our own generator to the iterable property that will yield an iterator that counts from 0 to the specified number.

Check out the resources in the previous section because we are incorporating all those concepts in this example.

I have to mention that modifying a primitive's prototype is not recommended. I would probably not use this in production but it is a pretty awesome trick to show at parties.

Do not ask what kind of parties I attend. 🙂

## Closing Thoughts

I am certain that there are more ways of generating a range of numbers out there. In my opinion, this is one of the beauties of programming. There are many ways of approaching a problem and you are able to craft your own awesome solution!
