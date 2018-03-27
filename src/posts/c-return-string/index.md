---
title: "Returning a String in C"
date: "2017-05-28"
tags: ["development"]
---

Hello, I am here to show you how to return a string from a C function.

Yes, really.

Honestly, I spent more time trying to figure this out than I would like to admit. On the bright side, I *probably* will not make this mistake again.

Let’s get straight into it!

## The Failed Attempt

Here’s a simplified version of my initial attempt:

```c
char *giveMeAString() {
    char theString[3];

    theString[0] = 'H';
    theString[1] = 'i';
    theString[2] = '\0';

    return theString;
}
```

Looks fine, right? At least, it did to me.

Nope, I would get some obscure string with weird symbols (like `0║b%`) after printing the result of this function. The best part was that the result was different every time the program ran.

Turns out the string I created in the function is destroyed once the function returns. Although I still receive a pointer to the address of the local variable, the variable does not exist anymore. As a result, the memory at the address is unpredictable.

## My Solution

Variables declared in a function lives on the stack and are popped off once the function returns. To solve this problem, we need a way to keep the memory alive after the function ends.

The solution I used is as follows:

```c
char *giveMeAString() {
    char *theString = malloc(sizeof(char) * 2 + 1);

    strcpy(theString, "H"); // Imagine that I am concatenating useful data
    strcat(theString, "i");

    return theString;
}
```

We add one additional byte in the `malloc` call to account for the null terminator. `malloc` allocates memory on the heap so the data persists after the function returns.

`strcpy` is used first because the variable is not initialized with a null terminator and `strcat` looks for the null terminator to begin concatenation.

One drawback of this method is that the caller of the function needs to deallocate the memory manually. This can be done by calling `free` on the returned pointer after processing is complete.

```c
void printTheString() {
    char *returnString = giveMeAString();

    printf("%s", returnString); // Hi

    free(returnString);
}
```

It is important to remember to free the memory to avoid memory leaks.

## Closing Thoughts

I understand that there may be other methods of reaching the same solution. I know of at least [one other approach](https://stackoverflow.com/questions/25798977/returning-string-from-c-function/25799033#25799033) where you can pass in an allocated string and manipulate it.

I chose this technique because I did not like the idea of out parameters. However, freeing memory manually outside the scope of the variable’s creation is not very clean as well. But like the previous section’s title states, this is *my* solution.

However, I am definitely open to hearing about more methodologies for returning strings in C and their benefits and/or drawbacks.

What is your preferred method of returning a string in C and why?
