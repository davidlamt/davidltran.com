---
title: "A Case for Trailing Commas"
date: "2020-05-09"
categories: ["Development"]
tags: ["thoughts"]
---

Have you ever seen code similar the following and wondered what the point of the comma on the last propery was for?

```js
const person = {
  name: 'David',
  age: 99,
};
```

This is usually intentional and you can even have it [automatically added](https://prettier.io/docs/en/options.html#trailing-commas) as part of your development workflow!

The main reason behind having a trailing comma is to help keep your version control diff clean. Take a look at the following example without a trailing comma:

```js
const person = {
  name: 'David',
  age: 99
};
```

Let's say we wanted to add another property to the object. In order to do that, we need to add a comma after `age: 99` and then add the new property on the next line. Your diff would look like the following.

```diff
const person = {
  name: 'David',
-  age: 99
+  age: 99,
+  title: 'Human'
};
```

Notice how it shows that you edited the `age: 99` line? Well, this is technically true since you added a comma but it's superfluous since your main goal was to add another property. Furthermore, you are now ["blamed"](https://git-scm.com/docs/git-blame) for that line.

What happens if we had a trailing comma already in place? The diff would look more accurate in regards to the commit's intention. Another positive would be that you won't get pinged about that pesky bug on a line of code you "changed".

```diff
const person = {
  name: 'David',
  age: 99,
+  title: 'Human',
};
```

As a side note, trailing commas are usually not applied to cases where everything is already on a single line:

```js
const person = { name: 'David', age: 99 };
```

There's not much benefit to add a trailing comma here in terms of keeping the diff clean since adding a property, or even separating each property onto its own line, would show an accurate diff.

I highly recommend [Prettier](https://prettier.io/) for automating the process of adding trailing commas and other style decisions for code uniformity!
