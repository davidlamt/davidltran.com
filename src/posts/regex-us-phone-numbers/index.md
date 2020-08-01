---
title: "Regular Expression for United States Phone Numbers"
date: "2018-07-20"
categories: ["Development"]
tags: ["regex"]
---

I used the following regular expression to test for US phone numbers.

Note that it may not cover all cases; I will display some of the cases I was testing for below. Feel free to use the expression as a starting point and make modifications to meet your requirements.

## Solution

```re
/^\+?1?[-. ]?\(?([2-9][0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ 
```

These are some variations that are matched by the regular expression:

```
4141234567 
414.123.4567 
414-123-4567 
414 123 4567
(414) 123-4567 
1 (414) 123.4567 
+1 414 123 4567
```

You can use a site like [this](https://regex101.com/) to verify the matches. Make sure to update the regex options to use the "global" and "multi line" flags.

## Analysis

| Section      | Explanation                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/^`         | Signifies the beginning of a line                                                                                                         |
| `\+?`        | Matches the `+` character zero or more times (`?` allows the character to be nonexistent)                                                 |
| `1?`         | Matches the `1` character zero or more times                                                                                              |
| `[-. ]?`     | Matches one of the `-`, `.`, or space characters zero or more times (`[]` signifies a set where one any of the characters can be matched) |
| `\(?`        | Matches the `(` character zero or more times                                                                                              |
| `[2-9]`      | Matches a single character between 2 and 9                                                                                                |
| `[0-9]{2}`   | Matches two consecutive characters between 0 and 9                                                                                        |
| `\)?`        | Matches the `)` character zero or more times                                                                                              |
| `[-. ]?`     | Matches one of the `-`, `.`, or space characters zero or more times                                                                       |
| `([0-9]{3})` | Matches three consecutive characters between 0 and 9                                                                                      |
| `[-. ]?`     | Matches one of the `-`, `.`, or space characters zero or more times                                                                       |
| `([0-9]{4})` | Matches four consecutive characters between 0 and 9                                                                                       |
| `$/`         | Signifies the end of a line                                                                                                               |

## Closing Thoughts

While regular expressions are usually language-independent, I did use it in JavaScript. I utilized the [RegExp.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) method to determine if there was a match between the regualr expression and a string.