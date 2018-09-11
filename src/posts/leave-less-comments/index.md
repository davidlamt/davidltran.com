---
title: "Leaving Less Comments"
date: "2018-09-10"
tags: ["development", "thoughts"]
---

**We should strive to leave less comments in source code**.

Okay, hold off on the lynching. Let me explain.

## Source Code Should Be Self-Documenting

There was a phase where I would comment every line I could because I believed that was what good source code looked like.

```js
const numbers = [1, 2, 3]; // An array containing numbers
const sum = 0; // Contains the total of all the numbers in the array added together

// Iterate through each number and process it
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add each number to the sum
}
```

"Okay, good. I have commented all my code so that the next person can understand it well."

Yeah... no. All I did was add superfluous comments that is more likely to confuse the next maintainer (possibly myself). My instinct when I see a comment is something along the lines of:

"The following section might not be super intuitive; thank goodness for comments".

After reading comments similar to the above example, I either feel like punching someone or laughing. It depends on my mood.

Ultimately, I just spent valuable time trying to "understand" something that is already well articulated by the source code itself.

Check out the non-commented version:

```js
const numbers = [1, 2, 3];
const sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
```

Seems clear enough to me. Although, not all source code is (or can be) inherently clear. More on this in a bit.

**We can write better, more maintainable, more easily understood code by encapsulating its meaning in properly named variables and functions**.

In other words, **well-curated abstractions are multitudes better than poorly written code with well-intentioned comments**.

Oh man, I'm on a row today with these pithy statements!

Check out the previous example with poorly named variables:

```js
const x = [1, 2, 3];
const y = 0;

for (let z = 0; z < x.length; z++) {
  y += x[z];
}
```

In my opinion, this is much more difficult to understand compared to the previous version. Naming (one type of abstraction) is a concept that seems innocently easy but is a truly difficult task that should be handled with much deliberation.

### Should

Source code **should** be self-documenting.

Most of the time, proper abstractions should be sufficient. However, there are times where comments could be truly beneficial.

I hesitate to say that comments are "necessary" at times. In almost all situations, the source code can be reorganized or rewritten to promote better abstractions rather than leaving comments.

Although, the time and effort required to do so may be a luxury so comments are acceptable in these cases.

## Final Thoughts

This post is hugely inspired by the commenting section in Robert C Martin's [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882). This book describes many ways in which you can become a better developer that I still abide by today.

Also, check out some of these ["best comments"](https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered#482129) others have encountered. A guaranteeed pick-me-up for those times when your code fails to work as intended.
