---
title: "Do Not Split up React's Render Method"
date: "2018-05-13"
tags: ["development", "thoughts"]
---

WAIT. Before I get lynched, I am not advocating against abstractions and maintainabiltiy. Please read a bit further before deciding to slaughter me.

I still agree with creating subcomponents when it makes sense to do so. What I am referring to is having many render helper methods within a single component.

This idea was brought up by one of my coworkers. At this point, I am not certain if I subscribe to the concept fully but it does make logical sense to me.

Also, keep in mind that this ideology is specific to **render methods**, not generic helper methods.

## Render This, Render That

While creating helper methods to abstract logic is definitely reasonable (and preferable), it may not be suitable in the `render()` method.

```js
render() {
  this._renderThis();
  this._renderThat();
}
```

The thought behind this is that if we do need render helper methods, it may be a good time to create subcomponents.

```jsx
render() {
  <This />
  <That />
}
```

For instance, compare the following two snippets:

```js
// UserProfile.js

render() {
  this._renderAvatar();
  this._renderUserStatus();
  this._renderUserBiography();
  // ...
}
```

```jsx
// UserProfile.js

render() {
  <Avatar />
  <UserStatus />
  <UserBiography />
  // ...
}
```

In these examples, the level of abstraction may seem similar on the surface. However, in the second snippet, all the logic is in their respective components instead of being packed into `UserProfile.js`.

### No Render Abstractions

On the other hand, there may be times when it is not (subjectively) appropriate to create subcomponents. In those cases, we may want to include all the logic in the `render()` method instead of abstracting it out.

One reason behind this is to help maintain the developer's focus. Imagine if you had to navigate between multiple render helper methods while keeping track of what was happening in the main one.

While this may not be true in all situations, *generic* helper methods may be more easily reasoned about than helper *render* methods. For instance, `this._renderItemList()` may be more difficult to understand than `isEmail()`.

## Closing Thoughts

While I may or may not adopt this methodology moving foward in my own projects, I found the idea interesting. I hope to continue to stay receptive to different ideologies and perspectives throughout my career so that I may become a more well-rounded developer.
