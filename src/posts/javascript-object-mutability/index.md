---
title: "JavaScript Object Mutability"
date: "2017-10-01"
categories: ["Development"]
tags: ["javascript"]
---

In a [previous post](/blog/var-vs-let-vs-const), I discussed how declaring variables (and functions) with `const` helps prevent state changes.

**Unexpected state changes are one of the most common causes for bugs**. As a result, it is desirable to prevent unexpected state changes from occuring in the first place.

One method is to declare variables using `const` as that makes the variable *constant*. However, as stated in the previous post, `const` declarations do not make JavaScript objects immutable.

## JavaScript Objects

Let's run some experiments on a JavaScript object declared with the `const` keyword.

```javascript
const person = {
    name: 'David',
    age: 23,
    awesomeness: 10
};

person = {
    name: 'Josh'
};
/*
 * "TypeError: Assignment to constant variable."
 *
 * A const object cannot be redefined - good.
 */

person.awesomeness = 0;

console.log(person);
/*
 * {
 *     name: 'David',
 *     age: 23,
 *     awesomeness: 0
 * }
 *
 * What the? This cannot be true. I am truly awesome.
 * Plus, why the heck can I change a variable declared as const?
 */

delete person.age;

console.log(person);
/*
 * {
 *     name: 'David',
 *     awesomeness: 0
 * }
 *
 * Great, I have no age.
 * Apparently, we can delete properties of a constant definition...
 */

person.sucks = true;

console.log(person);
/*
 * {
 *     name: 'David',
 *     awesomeness: 0,
 *     sucks: true
 * }
 *
 * No no NO! I do not suck!
 * And I should not be able to add another property to a constant definition!
 */
```

Apparently, `const` objects **can have existing properties modified or deleted and new properties added**.

Well, at least, the variable cannot be redefined.

What if you want an object to be immutable? For instance, a pseudo-enumeration variable:

```javascript
const DRINKING_AGE = {
    CALIFORNIA: 21,
    PUERTO_RICO: 18,
    // ...
};
```

## Immutable Objects

The `Object.freeze()` method *freezes* an object to **prevent existing properties from being modified or deleted and new properties from being added**.

Let's see an example!

```javascript
const DRINKING_AGE = Object.freeze({
    CALIFORNIA: 21,
    PUERTO_RICO: 18,
    // ...
});

DRINKING_AGE.CALIFORNIA = 15;

console.log(DRINKING_AGE);
/*
 * {
 *     CALIFNORIA: 21,
 *     PUERTO_RICO: 18,
 *     ...
 * }
 *
 * Perfect, we cannot modifiy an existing property.
 * Nice try, minor!
 */

delete DRINKING_AGE.CALIFORNIA;

console.log(DRINKING_AGE);
/*
 * {
 *     CALIFNORIA: 21,
 *     PUERTO_RICO: 18,
 *     ...
 * }
 *
 * Thought you got me there, didn't you?!
 * You cannot delete a property when the object is frozen!
 */

DRINKING_AGE.CALIFORNIA_NEW = 15;

console.log(DRINKING_AGE);
/*
 * {
 *     CALIFNORIA: 21,
 *     PUERTO_RICO: 18,
 *     ...
 * }
 *
 * Valiant effort but this is getting quite annoying.
 * No new properties can be added.
 */
```

Hopefully the above examples made it clear what the `Object.freeze()` method is doing. When an objected if frozen, modification, deletion, and addition of properties are rejected.

There is a caveat to this, however. This method is **shallow**, meaning that only the first level of properties are frozen.

If a property contains another object, that inner object is not frozen. If you wish for all nested objects to be immutable, you will need to perform a **deep** freeze.

There is an example of a deep freeze implementation on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

## Other Mutability Methods

There are a few other methods for modifying the mutability of objects to a lesser extent than `Object.freeze()`.

These methods may be advantageous for certain scenarios where only certain restrictions are required.

I will not be giving an example for each method because ~~I am lazy~~ I would like you to experiment with it on your own! You can use the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) as your playground.

### Object.seal()

[This method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) *seals* an object so that **new properties cannot be added and existing properties cannot be deleted but can be modified**.

### Object.preventExtensions()

[This method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) *prevents extensions* to a property - **no new properties can be added but existing properties can still be modified and deleted**.

#### Complimentary Methods

The `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()` methods come with validation methods:

1. `Object.isFrozen()`
2. `Object.isSealed()`
3. `Object.isExtensible()`

## Closing Thoughts

I have only recently discovered these methods but their applications are numerous in my opinion. I would like to use these methods more consistently to improve the maintainability of my software.

Keeping software states immutable will help prevent mishaps and confusion. I believe that **software logic is more easily understood when there is certainty**. I can see a correlation between increasing certainty and decreasing technical debt.

What are your thoughts on these methods for changing an object's mutability factor? Are there any other approaches to help prevent unexpected state changes that you know about?
