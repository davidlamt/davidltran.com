---
title: "Checking If Object Property Is Configurable in JavaScript"
date: "2018-05-06"
categories: ["Development"]
tags: ["javascript"]
---

Until recently, I did not realize that object properties could behave differently based on their descriptors.

I was trying to utilize [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to do a shallow copy but kept getting errors thrown in my face (the console).

Something along the lines of "cannot assign to read only property..."

## Object Property Descriptors

Object properties have descriptors that indicate how the property behaves in different scenarios. For instance, a property can be marked so that it cannot be changed.

How does one set a property descriptor in the first place?

Objects are created with a predefined set of descriptors. However, there are several ways of setting and modifying property descriptors.

One way would be to use [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Check out that MDN resource to see all the available descriptors!

If you are looking to restrict changes to an object's properties, you should take a look at [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) and [Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal).

## Checking Property Configurability

In my case, I wanted to check if the property could be modified before performing a copy.

In order to do so, I came across the convenient [Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) method. It is important to note that this method returns the property descriptor on the specified object and does no search up the prototype chain.

After the method's invocation, you can check if the the property can be modified via the `configurable` descriptor.

```javascript
const frozenObject = Object.freeze({
  cold: true
});

console.log(Object.getOwnPropertyDescriptor(frozenObject, 'cold').configurable) // false
```

I recommend refactoring the check into a utility function called `isConfigurable()` or something similar.

It is also important to point out that the `configurable` descriptor tells you if the property can be modified **and** deleted.

## Closing Thoughts

In the end, I decided on utilizing the [for of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop and [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) along with a `isConfigurable()` utility to do the shallow copy.
