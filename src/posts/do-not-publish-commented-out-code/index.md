---
title: "Do Not Publish Commented Out Code"
date: "2017-11-12"
tags: ["development", "thoughts"]
---

Have you ever looked at the source code for a project and saw a bunch of commented out code?

Shortly after, you start to wonder why it's commented out. Then you realize that you have arrived at a fork in the road and you have to make the biggest decision of your life.

"Should I remove this commented out code? Is this a work in progress by someone who plans on picking it back up later?"

A true conundrum.

Okay, there might have been a *little* exaggeration there but this occurs to me quite often.

## Commented out Code

From my viewpoint, identifying commented out code is pretty straight forward.

Just look for comments that contain code.

What a revolutionary process! 🙂

These comment sections usually contain code that is no longer necessary. Maybe it was a previous implementation or a playground for someone's idea.

Ultimately, I believe that the benefits of keeping the commented out code is hugely outweighed by its negative implications, especially if the project is under [source control](/blog/what-is-version-control).

With source control, you can always revert to previous implementations if necessary. There should be little fear of losing earlier revisions of the code.

### Confusion

Commented out sections of code causes clutter that can lead to distractions for readers of the code.

But more importantly, the commented out code can cause confusion for future maintainers. Think of the questions in the introduction. Those would go through the person's head as they glance at the abomination.

Some other thoughts like "why is this commented out?" and "is this here for a reason?" will cross their mind. This further adds to the distractions that they do not need.

### The Endless Cycle

Most likely, the next person who comes upon the commented out code will be deterred from removing it for the fear that it has some use. As a result, the next developer after that comes to the same dilemma. And so forth.

Sometimes, comments are evil. Actually, I believe they are unnecessary more times than not.

Contrary to what others may consider best practice, I try to keep commenting to a minimal. I believe that you should construct code with readability in mind (naming, formatting, etc.) so that comments would be redundant.

Let me know if you would like to see a post where I dive further into my viewpoints on regular comments! We can ~~argue~~ have a nice, civilized discussion about it.

## Publishing Code

In the title of this post, I state that commented out code should not be published. What do I really mean by "published"?

Think of the word "publish", in this context, as the method for checking in code to a server for other team members to share. Publishing would map to pushing in Git and committing in SVN.

### Local Environment

I can see the benefits of having commented out code for experimenting or for reference. There may be other cases where it would be beneficial as well. For instance, when you need to work on another feature but your recent changes prevent you from doing so (maybe the application cannot run).

A form of stashing may be applicable in that situation but let's not dig too much into that.

This is why I tried to make it clear that I do not agree with having commented out code on a *shared server*.

This excludes local environments and personal branches. I believe you should do what is necessary, at the moment, to facilitate the smooth transition of your ideas into code.

Afterwards, you can take time to clean up the "junk" as to help prevent distractions for other developers in the future.

### Publish Complete Features Frequently

I think that one reason commented out code appears is because they are incomplete features. Of course, I do not think that incomplete features should be checked into a shared server but checking in commented out incomplete features is probably even worse.

This can be avoided by adopting a methodology where publishing short, complete features frequently is desirable. If you find yourself not being able to check in frequently, the feature you are working can likely be broken down into more modular tasks.

I would like to reserve my thoughts on the ideal Git workflow for a future post. Stay tuned for thoughts on how to incorporate branches and other Git features into projects to improve flexibility and maintainability!

## Closing Thoughts

I hope you can see why I believe that commented out sections of code causes more disturbance to future developers than the benefits that they may offer.

Of course, this is just my opinion and I would like to think that I am open to a different mindset if legitimate arguments are presented. Feel free to try to persuade me of the benefits of having commented out code in a shared space!

The [Broken Window Theory](https://en.wikipedia.org/wiki/Broken_windows_theory) suggests that allowing one bad practice (publishing commented out code) will result in many other bad practices being followed. The theory propses that allowing a violation to persist will give people the perception that other negative acts are accepted.

What are your viewpoints on publishing commented out code and why? What other constructs in code do you think cause unnecessary distractions for developers?
