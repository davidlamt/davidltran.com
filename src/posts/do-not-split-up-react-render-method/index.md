---
title: "Do Not Split up React's Render Method"
date: "2018-05-13"
tags: ["development", "thoughts"]
---

WAIT. Before I get lynched, I am not advocating against abstractions and maintainabiltiy. Please read a bit further before deciding to slaughter me.

I still agree with creating subcomponents when it makes sense to do so. What I am referring to is having many helper render methods within a single component.

This idea was brought up by one of my coworkers. At this point, I am not certain if I subscribe to the concept fully but it does make logical sense to me.

Also, keep in mind that this ideaology is specific for **render methods**, not generic helper methods.

## Render This, Render That

While creating helper methods to abstract logic is definitely reasonable, it may not be suitable in the `render()` method.

```js
render() {
  _renderThis();
  _renderThat();
}
```

The thought behind this is that if we do need helper render functions, it may be a good time to create subcomponents.

```jsx
render() {
  <RenderThis />
  <RenderThat />
}
```

However, there may be times where it is not (subjectively) appropriate to create subcomponents. In those cases, we may want to include all the logic in the `render()` method instead of abstracting it out.

One reason behind this is to help maintain the developer's focus. Imagine if you had to navigate between multiple render helper methods while keeping track of what was happening in the main one.

## Closing Thoughts

While I may or may not adopt this methodology moving foward in my own projects, I found the idea interesting. I hope to continue to stay receptive to different ideaologies and perspectives throughout my career so that I may become a more well-rounded developer.
