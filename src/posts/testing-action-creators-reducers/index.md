---
title: 'Use Action Creators When Testing Reducers'
date: '2018-08-05'
tags: ['development']
---

What does testing an action creator usually look like?

```js
export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

// ...

it('addTodo() should create a correct ADD_TODO action', () => {
  expect(addTodo('Write tests')).toEqual({
    type: ADD_TODO,
    payload: 'Write tests',
  });
});
```

Hm, aren't we just rewriting the action creator to test it?

## A Better Approach

I think it may be more beneficial to test the action creator when we test our reducer:

```js
export default const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          text: action.payload,
        },
      ];
    default:
      return state;
  }
};

// ... 

it('should handle ADD_TODO', () => {
  expect(todos([], addTodo('Write tests'))).toEqual([
    {
      completed: false,
      text: 'Write tests',
    },
  ])
})
```

By using this approach, we are testing both the action creator and reducer. If the action creator produces the intended object, the reducer will produce the correct state.

This saves us from writing a redundant action creator test.

## Final Thoughts

In my opinion, writing an individual action creator does not bring any value. An action creator should always, eventually, return an object. If we utilize that object in a reducer test, we are effectively validating that the resulting object is correct.

However, it may just be that I do not have enough experience writing tests around applications using Redux yet. This leads me to the following phrase that I am trying to practice: **Strong opinions, loosely held**.

Special thanks to [A. Sharif](https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f) for this and other useful testing concepts!
