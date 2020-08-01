---
title: "Pluralizing Words in JavaScript"
date: "2018-04-30"
categories: ["Development"]
tags: ["javascript"]
---

Add a "s" to the end of the word.

Until next time!

No?

## Pluralizing

Here is one way to pluralize in JavaScript:

```javascript
function displayDays(days) {
  console.log(`${days} day${days !== 1 ? 's' : ''}`)
}

displayDays(5); // 5 days

displayDays(1); // 1 day

displayDays(0); // 0 days
```

Notice how we are using `days !== 1`. Why not just use `days > 1 ? 's' : ''`?

Doing so makes it read: "Add a 's' when there are more than a single day". This makes sense but we need to account for when the count is 0 as well.

We want it to display ["0 days" instead of "0 day"](https://english.stackexchange.com/questions/13073/correct-plural-form-of-a-noun-preceded-by-zero/13075#13075).

I actually made this mistake and my coworker pointed it out. Thank you, code reviews. 🙂

While a ternary is sufficient for when the word is known ahead of time, there is some difficulty when user input is involved. There are many words that do not fit in the ternary model above.

## pluralize

This is where a package like [pluralize](https://www.npmjs.com/package/pluralize) could come in handy!

You can use it as follows:

```javascript
import pluralize from 'pluralize'

displayDays(days) {
  console.log(pluralize('day', days, true));
}

displayDays(5); // 5 days

displayDays(1); // 1 day

displayDays(0); // 0 days
```

The third argument accepts a boolean that determines whether to display the count itself. For instance, a `false` argument would result in just "day" or "days" according to the `days` variable.

Now you can also easily pluralize pesky words like "quiz" and "die"!

## Closing Thoughts

In my opnion, using the pluralize package makes the code look a lot cleaner and the package is fairly small. However, if the word is static, a simple ternary cannot go wrong.
