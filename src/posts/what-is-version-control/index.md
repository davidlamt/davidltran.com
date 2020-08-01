---
title: "What Is Version Control: Centralized vs Distributed"
date: "2017-04-16"
categories: ["Development"]
tags: ["git"]
---

“Why do I need version control?”

![Without Version Control](/without-version-control.png)

Do you want to have a folder that looks like this? Trust me, you do not.

A version control system (**VCS**) **helps keep track of changes to files**. It keeps a history of all additions, modifications, and deletions that take place on a set of specified files. These systems also allow **team members to work concurrently** through a set of, often, built-in tools.

As software developers, we enjoy programming (sometimes) ​and would rather spend a majority of our time on working on problems rather than managing some kind of backup system or worrying about overlapping code. We also like to think about what we are having for lunch, occasionally more than the problem at hand.

## Why Should I Be Using a Version Control System?

A good version control system solves both of the aforementioned issues: **managing backups and ​dealing with code overlap**.

As an interesting note, most version control systems can keep track of **more than just source code files**. For instance, you can keep track of changes to a word document or an image!

For the attentive readers, the backup folder image above was fabricated (check out the modification dates). Despite that, I am ashamed to say that a backup directory really exists on my work computer. I should really practice what I preach. Do not be like me and create something so atrocious and cringe-worthy.

### You Will Be (Almost) Omnipotent

A version control system allows a developer to **revert to or view the source code at previous positions in time** by keeping a history of all changes. This is especially useful when tracking down a bug because you can narrow down which revision caused the issue. Possibly even more important, the reassurance that the previous code is always there aids in helping developers explore and refactor without fear!

Have you ever seen some code that is commented out but does not seem to be referenced to anywhere? The initial developer probably commented the code out instead of removing it for the **possibility that it could be used in the future** but it never was. The next developer who passed by the mistreated code left it as is for the **fear that it is there for a reason**. This vicious cycle is endless and the code has probably not seen past the `/* */` in years.

​How can we deliver peace to the poor guy? Better yet, how can we prevent such a heart-wrenching tale from ever occurring? Use version control. It saves lives.

​With a system that keeps track of every byte that changes, developers can **freely remove code that is no longer used**. And if a time comes when that removed code is required again, it is quite easy to ask the godly version control system to provide deliverance. Similarly, the system also gives developers the freedom to **explore new ways of solving problems**.

### ​You Can Increase Productivity

Imagine a workflow where only one developer can work on a code base at a time because all other contributions by other team members may conflict with each other. This is just one of the many horrible nightmares that have me waking up screaming in horror.

Version control system to the rescue! ​Pretty much all (is it really ever safe to say “all”?) version control systems **allow software development teams to work concurrently**. This is due to the fact that each developer has a copy of the code base on their own computers. Even more amazing, many of these systems have diff and merge features built into their cores.

The diff tool allows one to view the **differences between two or more versions of a file**, usually in a side-by-side manner.​ In most instances, the diff and merge features are combined so a developer can **select a particular variation from a group of changes** that are all visible.

## What ​Is a Centralized VCS?

A centralized VCS is one where there exists a central copy of the code base. This central copy is most likely stored on a server where developers must pull and push changes from and to.

When a developer creates a local copy of the central ​code base, they are obtaining the most recent revision that includes a very limited file history (if any).

The typical workflow when working with a centralized VCS is as follows:

- Pull down changes from the central server to your local copy.
- Make the necessary changes to the code base.
- Commit the modifications back up to the central server so that other developers can view and pull them.

## What Is a Distributed VCS?

Using a distributed VCS (**DVCS**) equates to **every team member having a true version of the code base**. Since the code base on one’s local machine is a “true” repository, a developer can perform commits, reverts, and other version control features on their own computer. Moreover, each copy contains the entire history of the repository so it is possible to view or revert to any previous point.

Additionally, every copy is on an equal footing so developers can interact (push or pull) with each other as opposed to just a central server. In essence, a DVCS can be viewed as a **peer-to-peer system​**.

I understand if this is a bit confusing, it is still difficult for me to comprehend!

“Okay, but what about a remote repository like GitHub? Also, how do developers have copies of this ‘true’ code base, where does that come from?”

Yes sir (or ma’am)! In truth, a DVCS is often used like a centralized system by having a remote repository where all changes are ultimately pushed to. But the important note is that a DVCS **does not need to have a central copy**.

​Furthermore, the phrase “central copy” is more open-ended in a distributed system. Who is to say that my copy is not the main version? After all, I can just put my version on GitHub and enforce that other team members push to it.

In light of that slight contradiction, the structure of a distributed VCS helps make merging less of a headache. I will discuss this further below but because of the nature of a DVCS, the merging process has more information on the state changes that has occurred and that aids in facilitating the operation.

## Which System Should I Choose?​

Is it too late to say that this post is biased? Every post on this blog is biased in some way because I am expressing my opinions, right? Well, I am confident that you accept this fact since you are still around :).

​An honest disclaimer: I only have experience using SVN (centralized) and Git (distributed).

​To cut to the chase, **I strongly encourage using a distributed version control system**.

Now that only half of you are left, let’s explore my thoughts on this bold statement.

## DVCS Features

​As you read the previous sections briefly explaining the differences between a centralized and distributed VCS, did you have a feeling that the distributed system completely encompasses the centralized one?

That was not on purpose (maybe a subconscious bias)​ but that is one point I would like to make: **a DVCS has the features of a centralized one and more**. Most projects using a distributed system has a remote repository that acts as a central copy but keep in mind that this is not necessary because every local repository is equal and peer-to-peer communication is possible.

### Merging with a DVCS

As I alluded to earlier, a​ distributed system’s merging process is more advantageous for both the system and the user. A DVCS **uses a directed acyclic graph (DAG) structure** where the merging process begins by traversing up the graph to find the common ancestor. From there, a recursive merge strategy is used.

Any attempts at a deeper explanation would just do this topic injustice so [here](http://mark-dot-net.blogspot.com/2012/04/understanding-distributed-version.html) is a great resource on DAG and DVCS.

In comparison, a centralized system tries to merge the differences between the immediate local copy and the most recent central revision.

## Working Locally

One of the most attractive features for me with a DVCS is the ability to work locally. A DVCS allows you to commit often, even without an internet connection. Recall that a local code base contains the entire history of the repository.

Committing incremental changes to your local repository is possible (and very quick) because it is on your machine. Furthermore, you can push the set of changes to the remote repository at your convenience. ​

On the other hand, committing to a centralized VCS is a rare occurrence because you do not want to push unfinished features to the central copy. As a result, a commit with large changes happens and this further complicates merging when it invariably occurs.

## Closing Thoughts

Oh my, this turned out to be much longer than I had originally anticipated. You poor souls! I suppose you deserve a virtual high-five for dragging yourself through this horrible mess.

While this post is informative (I hope), I suggest that you explore more on the topic of version control systems over at ​the [Atlassian Blog](https://www.atlassian.com/blog/2012/02/version-control-centralized-dvcs) and on [BetterExplained](https://betterexplained.com/articles/a-visual-guide-to-version-control/).

If you only take one thing away from this ​discussion, pick a version control system and use it! But you better choose a DVCS or I will cry.

All jokes aside, what are some situations where you would prefer a centralized VCS over a distributed one? On the other hand, what are some benefits of a DVCS that I missed?
