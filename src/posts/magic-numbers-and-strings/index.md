---
title: "Do Not Use Magic Numbers and Strings"
date: "2017-05-07"
tags: ["development", "thoughts"]
---

I recently had the opportunity to make improvements to code I wrote about eight months ago.

Okay, fine. What I *really* meant: I had to go back to fix stuff because things did not work and a customer was about to use it.

This opportunity was eye-opening for me. I was able to see what a horrible programmer I was only eight months back. By no means do I state that I am a fantastic programmer now but it amazes me **how much you can grow in a such a short amount of time**.

This feels especially true in a fast-moving field like software development where **constant learning is a part of the job description**.

Anyhow, while I was modifying code, I kept getting blocked and frustrated by the numerous magic numbers and strings spread throughout the code base (especially by yours truly).

In the heat of annoyance, I ~~punched my monitor~~ made a pact to be more conscious of my use of such hideous constructs.

Disclaimer: I am still guilty of using magic numbers and strings but I am being active in replacing them. Don’t give me too much crap, okay?

## What Are Magic Numbers?

Let’s just jump straight into an example and then dissect it afterwards!

```javascript
if (Bob.age >= 21)
    Bob.getWasted();
```

“David, why the heck can Bob get wasted if his age is greater than or equal to 21?”

That is the question you should be asking me but you may have deduced that 21 is the drinking age in this example.

How about something more convoluted?

```javascript
if (data[7] === 0x47)
    doSomething();
```

What is the significance of the 8th index in the `data` array? What does `0x47` mean?

A rough definition of a magic number **is a number that is used directly in code**.

Ultimately, magic numbers cause unnecessary ambiguity that will result in more technical debt as the project continues.

For instance, what if the drinking age changes? More importantly, 21 is just the drinking age for California; other states have different drinking ages.

The second example is just all around confusing. Do you even have any idea what the `if` statement could translate to?

### How to Avoid Magic Numbers

Let’s take a look at an improved version of the first example:

```javascript
const CALIFORNIA_DRINKING_AGE = 21;

if (Bob.age >= CALIFORNIA_DRINKING_AGE)
    Bob.getWasted();
```

Much clearer, if I do say so myself.

Moreover, changing all instances of the drinking age is as simple as changing one variable.

How about this?

```javascript
const DRINKING_AGE = {
    CALIFORNIA: 21,
    PUERTO_RICO: 18,
    // ...
};

if (Bob.age >= DRINKING_AGE.CALIFORNIA)
  Bob.getWasted();
```

In both examples, there is no ambiguity and the code is extensible.

Let’s tackle that other example!

```javascript
const CHECKSUM_POSITION = 7;
const EXPECTED_CHECKSUM = 0x47;

if (data[CHECKSUM_POSITION] === EXPECTED_CHECKSUM)
    doSomething();
```

Who would have guessed this is what it meant?

*No one*. Lying is not good. :)

### When to Use Magic Numbers

Yes, this section really exists. Even after all the bashing I did on magic numbers.

Personally, **I do not consider the numbers 0, 1, -1, and 2 as magic numbers in certain situations**.

For instance, when checking if a function like `indexOf` returns -1 or checking if a number is even.

However, I strongly believe that these checks should **be a part of a function with a clear name**.

```javascript
const stringContains = (string, character) => string.indexOf(character) !== -1;

const isEven = number => number % 2 === 0;

stringContains("test", "a"); // false
stringContains("test", "t"); // true

isEven(1); // false
isEven(2); // true
```

Honestly, this topic is in a gray area and many people have different opinions on when numbers are considered magic numbers.

My advice is to come up with your own set of rules and be consistent but also understand that it is okay to change your opinions over time.

## What Are Magic Strings

Let’s take a similar approach to magic numbers and go straight to an example.

```javascript
if (chessPiece === "K")
    doSomethingCool();
else if (chessPiece === "Q")
    doSomethingAwesome();
// ...
```

This code checks what the current chess piece is and does something different for each type.

One issue that jumps out is that the single-letter piece notation may not be clear to someone who is not familiar with chess. Furthermore, imagine the disaster that would occur if you accidentally typed “W” instead of “Q” for queen.

The following example shows code for separating a string by spaces:

```javascript
const testString = "This is a test";

testString.split(" "); // ["This", "is", "a", "test"]
```

Seems okay, right? But what if you wanted to change the separator? This might be easy if you only used space as a separator in one location.

Magic strings are **string literals that are used directly in code. Similar to magic numbers, magic strings creates ambiguity and inflexibility.

Although **this should be avoided**, imagine if you had a check similar to the above example in multiple places. This creates more, unnecessary, possible points of failure when code modification is required.

### How to Avoid Magic Strings

One possible improvement is to create an enumeration just as we did with magic numbers.

```javascript
const CHESS_PIECE = {
    KING: "King",
    QUEEN: "Queen",
    // ...
};

if (chessPiece === CHESS_PIECE.KING)
    doSomethingCool();
else if (chessPiece === CHESS_PIECE.QUEEN)
    doSomethingAwesome();
// ...
```

Let’s restructure the other example as well.

```javascript
const testString = "This is a test";

const separator = " ";

testString.split(separator); // ["This", "is", "a", "test"]
```

In both examples, the intent of the code is clear and maintainability is increased for when requirements inevitably changes.

### When to Use Magic Strings

As with magic numbers, this topic is quite opinionated. I will discuss my thoughts but feel free to disagree. Just don’t make me cry by leaving mean comments!

I endorse **not using magic strings at all in production code**.

I believe that magic strings have an even greater negative effect than magic numbers. For example, the possibility of keystroke errors are increased with the length of the string.

“But David, what about console logs and displaying messages to the user?”

Well, I believe that all debug messages should be removed from production code. On the other hand, string literals in test code is okay as the test suite is separate from the production code.

Moreover, I think that display messages should be defined in a well-named variable.

Something like the following:

```javascript
const GREETING = "Hello, Bob";

const AGE_PROMPT = "What is your age?";

displayMessage(GREETING);
displayMessage(AGE_PROMPT);
```

## The Benefits of Avoiding Magic Numbers and Strings

This section is just an overview of the points discussed in previous sections. I would like to highlight the positive gains of avoiding these constructs in a TL;DR manner.

You should avoid magic numbers and strings because it:

1. Improves readability.
2. Increases extensibility and maintainability.

And as always, **code as if the next developer who has to maintain your code is a psychopath and knows where you live**. 🙂

## Closing Thoughts

I hope that I was able to convey the negative effects of using magic numbers and strings. Even if our methods for determining whether something is magic and replacing them differs, I think that we can agree on the positive benefits of removing ambiguity and improving maintainability.

What criteria(s) do you look at when determining whether a number or string is magical? In what instances do you consider a number or string not magical?
