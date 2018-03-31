---
title: "Logging Function Entry and Exit in C"
date: "2018-03-31"
tags: ["development"]
---

Recently, I had to figure out a way to log when a function was entered and exited in C. I thought about doing it manually but ran into some huge roadblocks.

The code base had many functions that had multiple return statements within them. In addition to breaking [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) for adding the same logging logic to every function, we would need to copy the exit logic multiple times within the same function.

Luckily, I discovered something called [instrumentation](https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html). This post will replicate the steps we took so you can accomplish something similar!

## Instrumentation

In addition to having a pretty cool name, this feature allows for collecting profiling statistics in programs. This is exactly what I needed as we wanted to create a debugging log trail.

First, we needed to add the `-finstrument-functions` option to our `CFLAGS` compiler variable.

## Implement Instrumentation Functions

Next, we needed to declare and implement two functions that will be called when a function is entered and when it is exited.

```c
void __cyg_profile_func_enter (void *this_fn,
                               void *call_site);
void __cyg_profile_func_exit  (void *this_fn,
                               void *call_site);
```

## Retrieveing Useful Information

Since our goal was to provide beneficial logging details, we also grabbed the file name, function name, and line number using macros:

* `__FILE__`
* `__func__`
* `__LINE__`

Make sure these macros, or something similar, are available in the compiler you are utilizing.

However, using these macros within instrumentation functions results in the information always pointing to the instrumentation function. We were fine with the file name and line number being inconsistent, but we at least needed the correct function names for productive debugging sessions.

I will show you how we successfully retrieved the function name in the next section.

## Multiple Platforms

The next hurdle I had to jump over was making sure this logging functionality worked on Linux, Mac, and Windows. In order to accomplish this, I used [preprocessor directives](https://en.wikipedia.org/wiki/C_preprocessor) to determine which platform the program was built for.

As previously mentioned, we still needed to retrieve the correct function names. Unfortunately, the confusingly named `this_fn` parameter of the instrumentation function does not give the actual function name.

We accomplished what we wanted with a variation of the following code:

```c
void getSymbolFromAddress(void *addr, char *symbol) {
#if WIN32

  memset(symbol, 0, 1024);

  DWORD *displacement = 0;

  IMAGEHLP_SYMBOL *pSym = (IMAGEHLP_SYMBOL *)n_malloc(sizeof(IMAGEHLP_SYMBOL) + (1024 - 1) * sizeof(CHAR));
  pSym->SizeOfStruct = sizeof(IMAGEHLP_SYMBOL);
  pSym->MaxNameLength = MAX_PATH;

  HANDLE process = GetCurrentProcess();

  SymInitialize(process, NULL, 1);

  SymGetSymFromAddr(process, addr, &displacement, pSym);

  if (pSym->Name != NULL)
    strcpy(symbol, pSym->Name);

  SymCleanup(process);

  n_free(pSym);

#else

  Dl_info info;
  dladdr(addr, &info);

  if (info.dli_sname != NULL)
    strcpy(symbol, info.dli_sname);

#endif
}

void __cyg_profile_func_enter(void *this_fn, void *call_site) {
  char functionName[1024] = { 0 };

  getSymbolFromAddress(this_fn, functionName);

  printf("%s (%d): Entered %s()\n", __FILE__, __LINE__, functionName);
}

EXPORT_SYMBOLS void __cyg_profile_func_exit(void *this_fn, void *call_site) {
  char functionName[1024] = { 0 };

  getSymbolFromAddress(this_fn, functionName);

  printf("%s (%d): Exited %s()\n", __FILE__, __LINE__, functionName);
}
```

Make sure you include the correct headers!

Windows: `windows.h`

Unix: `imagehlp.h`

## Closing Thoughts

Hopefully I saved you some time and headaches around this topic!

Also, I undersetand that this may cause an overhead for the program when a debugging log is not required. Also, the performance of dynamically getting the function's name is not great.

If you know of any other or better ways of accomplishing something similar, please let me know!
