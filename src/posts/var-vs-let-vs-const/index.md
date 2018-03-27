---
title: "var vs let vs const: Why I Default to Using const"
date: "2017-04-23"
tags: ["development", "thoughts"]
---

While the main focus of this post will be on `var` vs `let` vs `const`, let’s first examine their backstories.

The latest version of the JavaScript standard goes by many names:

- ES6
- ECMAScript 6
- ES2015
- ECMAScript 2015

I can just call it Banana for all we care. Actually, let’s do that.

Banana was finalized and released in 2015 but has been in development since 2009.

Okay, I can tell that using “Banana”​ will get old quickly. As much as I would love to use nonsensical expressions, let’s stick with ES6 for consistency’s sake!

The ES6 update brought two new ways of declaring variables: `let` and `const`.​ Previously, vanilla JavaScript developers only had the option of declaring variables with `var`.

Let’s explore when to use each approach!

## When Should I use var?

​Never.

Yes, really.

With the release of the two new techniques, I personally do not see a viable use for `var` besides some narrow situations. Even then, I would attempt to **restructure the surrounding code to avoid using it**.

The main reason behind avoiding `var` variables is that they can easily be a source of misunderstandings and headaches, especially during debugging.

For instance, `var` variables can be redefined:

```javascript
function doSomethingUseless() {
    var uselessValue = 10;

    uselessValue = 20;

    var uselessValue = 15; // This does not give an error!
}
```

Furthermore, variables declared with `var` are **function scoped**.

### Function Scoping vs. Block Scoping

Function scoped variables ​are only available within the function they are constructed. If they are not declared in a function, they are **globally scoped**. Let’s view some code that may cause great confusion.

```javascript
if (true) {
    var uselessValue = 10;

    console.log(uselessValue); // Displays 10, as expected
}

console.log(uselessValue); // Still displays 10, what is happening?!?
```

Recall that variables declared with `var` are function scoped​ but the variable here is not surrounded by a function so it becomes globally accessible.

Block scoped variables are those that are only accessible within a block. This can be crudely translated to block scoped variables​ being **available between two curly braces**. This includes functions, loops, conditional execution environments, etc. If there are nested blocks, the variable is **scoped within the inner most block**.

## When Should I use let?​

​You should declare variables using `let` when you need the value of the variable to change. This is common in for loops and other similar situations.

`let` variables help developers avoid some common pitfalls that `var` variables bring.​ `let` variables cannot be redefined. Attempting to do so will result in an error. `let` variables are also **block scoped**. Let’s take a look at a combination of the previous examples, but using `let` this time around.

```javascript
function doSomethingUseless() {
    let uselessValue = 10;

    uselessValue = 20;

    let uselessValue = 15; // This throws an error in your face, as it should
}

if (true) {
    let uselessValue = 10;

    console.log(uselessValue);
}

console.log(uselessValue); // Throws another error in your face, let loves throwing things in people's faces
```

## When Should I Use const?​

Always!

Okay fine, whenever you can. Just know that the JavaScript Gods cry every time you do not.

Variables declared with `const` have similar attributes to those defined with `let`. They **cannot be redefined** and are **block scoped**. I should take a moment to mention that when I say `let` and `const` cannot be redefined, I mean so within the same scope.

On the other hand, `const` variables **cannot be updated**:​

```javascript
function doSomethingUseless() {
    const uselessValue = 10;

    uselessValue = 20; // NOPE, I HOPE YOU LIKE YOUR BREAKFAST WITH A SIDE OF ERRORS!
}
```

“Why on Earth would I want to use a variable that cannot be updated? Is that not the essence of a ‘variable'”?

## Why I Default to Using const​

​Valid point on the meaning of a “variable”. I suppose variables defined with `const` should not be called variables, but something more *constant*. :)

I believe that as developers, most of our debugging sessions are caused by **unexpected changes or behaviors** in our programs.​ For example, a variable containing a value we did not anticipate.

`const` provides us with some assurance that, at least, this portion cannot be changed (without the program throwing a fit). Anything we can leverage to mitigate possible points of failure, and ultimately stress, is absolutely with it in my eyes.

## Closing Thoughts​

I believe in using `const` everywhere that’s possible.​ For situations requiring a changeable variable, use `let`. And you already know my position on `var`, just avoid it like the plague.

Although I stated that `const` variables cannot be updated, this is not the same as being immutable. Objects and arrays ​declared with `const` can be mutated. Learn more about this from Wes Bos [here](http://wesbos.com/let-vs-const/)!

What are your thoughts about using `const` in a prolific manner?​ If you could add another declaration variable to the JavaScript standard, what kind of rules and boundaries would it abide?
