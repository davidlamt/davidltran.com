---
title: "Refactoring Java Native Interface Code"
date: "2017-07-09"
categories: ["Development"]
tags: ["java"]
---

I recently had the opportunity to revisit code I wrote a few months ago.

As usual, I was appalled by how atrocious my programming style was. I am still far from being a great developer but my past self keeps on shooting himself in the foot. He seems to get a kick out of increasing technical debt for his future self.

I hate it. As a result, I am constantly trying to improve the software I write today so my future self does not come back and kill me. This is will be a never ending journey of improvement and I am fine with that.

I really like the moto of **leaving code a bit cleaner than you found it**.

Anyhow, I helped create a Java Native Interface bridge for our C software development kit at work. Essentially, it is just a Java wrapper library around our C functions so that customers can communicate with our devices with either language.

## Java Native Interface

Java Native Interface (JNI) is a way of supporting native C/C++ code in Java applications. It can help improve performance and it provides a way to use libraries written in native code without requiring a rewrite.

The ins and outs of JNI is quite enormous and to be honest, I am not well versed enough to explain it in depth.

Fortunately, I found a [great tutorial](https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaNativeInterface.html) that helped me tremendously in my own development. I highly recommend checking it out!

I will not be covering how to start writing and compiling JNI code, but rather how you can refactor it. The resource I provided above will be enough for you to understand the basics of it and hopefully get some benefit out of this post.

Maybe I will dedicate a future post on those topics and further insights.

## Caching IDs

In order to update Java variables or invoke Java methods from JNI, you need to first get the ID of that variable or method.

```c
JNIEXPORT jint JNICALL Java_JNI_Bridge_doSomething
  (JNIEnv *env, jobject thisObject) {
    jclass thisClass = (*env)->GetObjectClass(env, thisObject);

    jmethodID javaDoSomething = (*env)->GetMethodID(env, thisClass, "javaDoSomething", "()V";

    jfieldID javaInstanceVariable = (*env)->GetFieldID(env, thisClass, "javaInstanceVariable", "I");

    (*env)->CallVoidMethoid(env, thisObject, javaDoSomething);

    (*env)->SetIntField(env, thisObject, javaInstanceVariable, 7);
}
```

If you plan on using the same Java variable, method, or class multiple times, it may behoove you to cache their IDs. This will help eliminate the overhead of repeating the same calls.

```c
jclass classID;

jmethodID javaDoSomethingMethodID;

jfieldID javaInstanceVariableFieldID;

JNIEXPORT jint JNICALL Java_JNI_Bridge_doSomething
  (JNIEnv *env, jobject thisObject) {
    classID = (*env)->GetObjectClass(env, thisObject);

    javaDoSomethingMethodID = (*env)->GetMethodID(env, thisClass, "javaDoSomething", "()V";

    javaInstanceVariableFieldID = (*env)->GetFieldID(env, thisClass, "javaInstanceVariable", "I");

    (*env)->CallVoidMethoid(env, thisObject, javaDoSomethingMethodID);

    (*env)->SetIntField(env, thisObject, javaInstanceVariableFieldID, 7);
}
```

## Storing Names and Signatures

If you look in the first code example in the previous section, you will notice that we get an ID by a name and signature. These are string inputs and you already know [how I feel about strings](/blog/magic-numbers-and-strings).

Using pseudo-string enumerations can help reduce the potential for errors and improve readability and maintainability.

```c
const int NAME = 0;
const int SIGNATURE = 1;

enum JNI_BRIDGE_METHODS = {
    javaDoSomething
};

const char *JNI_BRIDGE_METHODS[][2] = {
    "javaDoSomething", "()V"
};

enum JNI_BRIDGE_FIELDS = {
    javaInstanceVariable
};

const char *JNI_BRIDGE_FIELDS[][2] = {
    "javaInstanceVariable", "I"
};

jclass classID;

jmethodID javaDoSomethingMethodID;

jfieldID javaInstanceVariableFieldID;

JNIEXPORT jint JNICALL Java_JNI_Bridge_doSomething
  (JNIEnv *env, jobject thisObject) {
    classID = (*env)->GetObjectClass(env, thisObject);

    javaDoSomethingMethodID = (*env)->GetMethodID(env, thisClass, JNI_BRIDGE_METHODS[javaDoSomething][NAME], JNI_BRIDGE_METHODS[javaDoSomething][SIGNATURE];

    javaInstanceVariableFieldID = (*env)->GetFieldID(env, thisClass, JNI_BRIDGE_FIELDS[javaInstanceVariable][NAME], JNI_BRIDGE_FIELDS[javaInstanceVariable][SIGNATURE]);

    (*env)->CallVoidMethoid(env, thisObject, javaDoSomethingMethodID);

    (*env)->SetIntField(env, thisObject, javaInstanceVariableFieldID, 7);
```

I have a feeling that this may not be the best way to do things. For instance, you will run into problems if there is a misalignment between the enumeration and character array (mapping is incorrect). However, I still believe that this is a step forward in the right direction.

## Closing Thoughts

I hope that I was able to provide some advice that you can apply to your own JNI code. If not, get lost. 🙂

Just kidding, I am positive that there are more and better methods of organizing JNI code that I am oblivious to. If you know of any such techniques, feel free to leave them in the comments!

Let’s travel on this journey of continuous improvement together!

Also, let me know if you would like to read more about the entire process of producing JNI code. I could also dive deeper into callbacks with JNI as I am (somewhat) familiar with creating a JNI library that encompasses a native library.

Do you know of any other ways to improve the overall structure of JNI code? If so, what are they and how do they benefit the code base?
