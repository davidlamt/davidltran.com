---
title: "Is C# Pass by Value or Pass by Reference?"
date: "2017-07-16"
tags: ["development"]
---

Recently, I was tasked with helping to remove sensitive data in C#.

More specifically, we needed to clear byte arrays and strings that contained sensitive data. Remember, I am working on software for payment terminals. Would not want sensitive card information just floating out there, now would we?

That is probably what the customer thought. However, sensitive information being passed into the software was already encrypted. Well, requests like these gives me a job so I should not be complaining. 🙂

## C# Is Pass by Value

Okay, that is that. See you guys next time!

Okay, fine.

While trying to clear byte arrays, I had to do a quick Google search on how arrays are passed in C#.

Turns out that **all parameters in C# are passed by value by default**.

```csharp
void incrementNumber(int number) {
    Console.WrinteLine($"incrementNumber: { number }");

    number++;

    Console.WriteLine($"incrementNumber: { number }");
}

void main() {
    int number = 1;

    Console.WriteLine($"main: { number }");

    incrementNumber(number);

    Console.WriteLine($"main: { number }");
}

/*
Output:

main: 1
incrementNumber: 1
incrementNumber: 2
main:1
*/
```

As you can see, the value of the parameter is changed inside of the method but its calling argument remains the same. This is because **only the value** is passed and there is no association between the two variables besides their initial values.

Okay David, what about objects?

```csharp
void incrementFirstElement(int[] numbers) {
    Console.WriteLine($"incrementFirstElement: { numbers[0] }");

    numbers[0]++;

    Console.WriteLine($"incrementFirstElement: { numbers[0] }");
}

void main() {
    int[] numbers = { 1, 2, 3 };

    Console.WriteLine($"main: { numbers[0] }");

    incrementFirstElement(numbers);

    Console.WriteLine($"main: { numbers[0] }");
}

/*
Output:

main: 1
incrementFirstElement: 1
incrementFirstElement: 2
main: 2
*/
```

Yes, [arrays are objects](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/arrays-as-objects).

But more importantly, what is going on here? Why is the modification to the first element of the array persisting after the method call if C# is pass by value?

In the case of objects, the reference is passed by value. The value of the array in the above example is a reference to the object in memory. The reference is similar to a pointer in C.

### Caveat

Now that you understand that objects are still passed by value but the value is a reference, try to make sense of the following example:

```csharp
void reassignArray(int[] numbers) {
    Console.WriteLine($"reassignArray: { string.Join(" ", numbers) }");

    numbers = { 4, 5, 6 };

    Console.WriteLine($"reassignArray: { string.Join(" ", numbers) }");
}

void main() {
    int[] numbers = { 1, 2, 3 };

    Console.WriteLine($"main: { string.Join(" ", numbers) }");

    reassignArray(numbers);

    Console.WriteLine($"main: { string.Join(" ", numbers) }");
}

/*
Output:

main: 1 2 3
reassignArray: 1 2 3
reassignArray: 4 5 6
main: 1 2 3
*/
```

If the results were not what you expected, do not fret. Take a look at the title of this section.

In this example, the original array does not change even though its reference is updated in a method. Or is it?

Remember, everything is passed by value by default. Appropriately, the `numbers` variable inside of `reassignArray` contains a value that is a copy of the reference to the original array object in memory.

If we were to reassign the variable to reference a new array object, it will have no correlation to the previous object reference. Afterwards, we can modify the new array object however we want but it will not be reflected in the original reference.

We will need to use the keywords `ref` or `out` if we want the reassignment to persist.

## Passing by Reference

Here is how we would pass an array by reference using the `ref` keyword:

```csharp
void reassignArray(ref int[] numbers) {
    Console.WriteLine($"reassignArray: { string.Join(" ", numbers) }");

    numbers = { 4, 5, 6 };

    Console.WriteLine($"reassignArray: { string.Join(" ", numbers) }");
}

void main() {
    int[] numbers = { 1, 2, 3 };

    Console.WriteLine($"main: { string.Join(" ", numbers) }");

    incrementFirstElement(ref numbers);

    Console.WriteLine($"main: { string.Join(" ", numbers) }");
}

/*
Output:

main: 1 2 3
reassignArray: 1 2 3
reassignArray: 4 5 6
main: 4 5 6
*/
```

The `ref` keyword is pretty self-explanatory; it causes the argument to be passed by *reference*.

The `out` keyword is like the `ref` keyword, except `out` does not require the variable to be initialized before being passed.

## Closing Thoughts

I hope that my little (or big) discovery helps you understand how parameters are passed in C# better.

Check out these articles on [ref](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref) and [out](https://msdn.microsoft.com/en-us/library/ee332485(v=vs.100).aspx) if you would like more information and examples on how those keywords work. This [article](https://msdn.microsoft.com/en-us/library/0f66670z(v=vs.71).aspx) is a great resource for a more in-depth analysis of general parameter passing in C#.

Let me know if there are any other caveats or interesting aspects of parameters and arguments that I should know about!

Do you still have trouble wrapping your head around references sometimes? Do you believe that the `ref` and `out` keywords should be used sparingly?
