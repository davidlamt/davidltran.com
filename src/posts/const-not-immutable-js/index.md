---
title: "Const Does Not Mean Immutable in JavaScript"
date: "2018-05-07"
categories: ["Development"]
tags: ["javascript", "thoughts"]
---

I believe the `const` variable declaration keyword in JavaScript is a bit misleading. It is easy to interpret variables declared with `const` as *constants*.

That would make sense, right?

The word *constant* is often used to reference immutability in the context of programming.

## Immutability

Immutability refers to a state's inability to be changed. In most programming languages, this term often describes variables that cannot be modified once they are set.

However, **the `const` keyword in JavaScript does not make a variable immutable**.

It may not be so easy to see why when it does seem to behave that way in certain situations.

For instance, take a look at the following example.

```javascript
const age = 30;

age = 35; // TypeError: Assignment to a constant variable.

const greeting = 'hello';

greeting = 'hi'; // TypeError: Assignment to a constant variable.

const person = {
  age: 30,
  name: 'David',
}

person = {
  age: 35,
  name: 'Tim',
} // TypeError: Assignment to a constant variable.
```

David, that seems pretty *constant* to me.

How about this?

```javascript
const person = {
  age: 30,
  name: 'David',
}

person.age = 35;
person.name = 'Tim';

console.log(person); // { age: 35, name: 'Tim' }
```

Hmm, that is a bit weird. Why could a variable declared with `const` be changed?

Well, as previously stated, that is because variables delcared with `const` are **not** immutable.

## A Better Explanation

I prefer to say that **variables declared with `const` cannot be reassigned** instead of stating that they are immutable. This may just seem like a small change but the wording makes all the difference.

This new way of thinking would shed light on the example above. When declaring [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) with `const`, they seem to be immutable because changing a primitive requires a reassignment.

However, [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) behave differently than primitives. Using `const` will prevent the variable from being reassigned another object but it will not stop the object's properties from being reassigned.

If you are looking to lock down an object's properties, check out my previous posts on [object mutability](/blog/javascript-object-mutability) and [property descriptors](/blog/check-object-configurable-js)!

## Closing Thoughts

Because of this dissonance between the `const` keyword and its meaning, I can see why some industry experts advocate against using it. However, I still hold to my belief of [defaulting to const](/blog/var-vs-let-vs-const) because of its various benefits.

I can only hope that as more people adopt `const`, the community will continue to spread light on what it actually does to help prevent confusion. I hope to do my part with this brief blog post!
