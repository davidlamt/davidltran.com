---
title: "Personal Preferences for Formatting Commit Messages"
date: "2018-04-29"
tags: ["development", "thoughts"]
---

Ever get so angry that you want to punch your computer screen when you see an empty commit message?

No, just me?

Some wise words by someone somewhere:

>> Code as if the next developer who has to maintain your code is a psychopath and knows where you live.

## Formatting a Commit Message

I mainly use Git but I think the concept of a commit message is applicable across [various version control systems](/blog/what-is-version-control).

There are many ways of formatting a commit message and it is usually best to follow the structure that your team decided on. The following is just my opinion and is by no means the best or correct way of doing so.

When using a ticketing system like Jira, I like to prefix the message with the ticket number. For instance, `TICKET-198: Blah blah`.

Afterwards, I like to state what has changed using a present tense verb. I try to fit the commit message into the following template:

"When merged, this commit will..."

For example, `TICKET-198: Resolve style conflicts` will read "When merged, this commit will resolve style conflicts".

I cannot take credit for this commit template but I do not remember where I saw it.

## Closing Thoughts

Hopefully this post will help keep you from being murdered by the next maintainer (which is likely yourself).

As a side note, you should make more frequent commits if you find yourself writing an essay as a commit message. This will make it easier to track down where particular changes occured.
