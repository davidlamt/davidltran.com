---
title: "Requiring One of Two Properties to Exist in TypeScript"
date: "2020-07-12"
categories: ["Development"]
tags: ["typescript"]
---

How do we represent a function or a React component that requires one of two properties, but not both, to exist in TypeScript?

We can create a base interface and [extend](https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces) that with two more interfaces that include and exclude those specific properties. Let's assume that we expect to have either `displayName` or `firstName` for a user.

```js
interface BaseUser {
  id: string;
  age: number;
  // ... other base user properties
}

interface UserWithDisplayName extends BaseUser {
  displayName: string;
  firstName?: never;
}

interface UserWithFirstName extends BaseUser {
  displayName?: never;
  firstName: string;
}

type User = UserWithFirstName | UserWithDisplayName;
```

We use the ["never"](https://www.typescriptlang.org/docs/handbook/basic-types.html#never) keyword to indicate that one property should not be set at the same time as the other. The or ("|") operator is used to create a [union](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types) where a `User` can only have one of the exclusive properties.

Now we can use the `User` type in a function as follows.

```js
const normalizeUser = ({
  age,
  displayName,
  firstName,
  id,
}: User) => { /* ... */}
```

Or if we're creating a React component:

```js
const UserDetails: React.FunctionComponent<User> = ({
  age,
  displayName,
  firstName,
  id,
}: User) => { /* ... */ };
```
