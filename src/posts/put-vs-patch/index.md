---
title: "PUT vs PATCH: What Is the Difference?"
date: "2017-06-18"
categories: ["Development"]
tags: ["http", "thoughts"]
---

I have been working with some colleagues on a web API that can be used to provide more support to customers who use our devices.

We originally demonstrated a prototype that was built with Node.js, Express, and MongoDB. The idea was well received but we were asked to continue our project using Microsoft’s stack because that is what the company is familiar with. After ~~throwing up our hands and storming out~~ discussing with others and between ourselves, we (somewhat reluctantly) agreed.

As you can tell, I digress quite often.

Anyhow, I was trying to implement a route for updating a property on a device and found myself stuck between using the PUT and PATCH methods.

Previously, I had always used PUT to update my models but PATCH seemed like a better choice after a bit of research. At that time, I did not really understand the differences between the two and it took me a while to get a grasp on their purpose.

Hopefully I can explain their distinctions in a clear and concise way that will save you from the headaches I had!

## Idempotency

According to the [HTTP documentation](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.1.2), **the PUT method is idempotent while the PATCH method is not**. The PATCH method not being idempotent caused me great confusion and I will explain why in the following sections.

“David, what the heck does idempotent mean in the first place?!”

Right, I guess I was getting ahead of myself.

I like to think of idempotency as not having any side effects. For instance, an action that is repeated will produce the same result every time.

In the case of HTTP methods, a request that is idempotent should always produce the same result no matter how many times the request is sent.

## PUT

The PUT method should be used for **replacing an entire entity**, not for updating a portion of the entity.

I guess that I have been using the PUT request incorrectly for a while. Oops! Thankfully, no one uses my web APIs besides myself. 🙂

Okay so, what does this look like?

Let’s say we have the following model for devices:

```json
{
    manufacture: String,

    model: String,

    timesRequested: Integer
}
```

Here’s an example of a PUT request you might send:

```json
PUT /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 0
}
```

Recall that a PUT implementation should replace the entire entity.

```json
GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 0
}
```

The PUT method is idempotent because the GET will continue to return the same result every time you send the PUT request.

### Incorrect Usage of PUT

Let’s consider the case where you use PUT to update a portion of the entity (just as I had before).

```json
GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 0
}

PUT /devices/1
{
    timesRequested: 1
}

GET /devices/1
{
    timesRequested: 1
}
```

What happened here?

If the PUT method of the web API you are using (or creating) is implemented correctly, it should be replacing the corresponding entity with the entity that is passed in. As a result, our attempt at updating a single property caused data loss.

Although the implementation is correct, the result is not as expected if you are trying to update a portion of the entity. This is where PATCH comes in!

## PATCH

The PATCH method should be used for **updating a portion of an entity**.

Let’s take that last example with PUT that did not produce favorable results and use PATCH instead!

```json
GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 0
}

PATCH /devices/1
{
    timesRequested: 1
}

GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 1
}
```

Much better, right?

As previously mentioned, the PATCH method not being idempotent bewildered me. If I repeatedly send the previous PATCH request, I know that GET will return the same result each time. So why is PATCH not idempotent?!

### Why PATCH Is Not Idempotent

Jason Hoetger provides an [excellent example](https://stackoverflow.com/questions/28459418/rest-api-put-vs-patch-with-real-life-examples/39338329#39338329) of why PATCH is not idempotent on Stack Overflow. His answer helped me solidify my understanding of the PATCH method.

While implementing the PATCH route for our project, I discovered an instance of PATCH not being idempotent first hand.

The following is a modified version of what was implemented.

```json
GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 0
}

PATCH /devices/1/increment

GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 1
}

PATCH /devices/1/increment

GET /devices/1
{
    manufacture: "manufacture",
    model: "model",
    timesRequested: 2
}
```

Even though the PATCH requests are identical, the entity is different after every subsequent request.

## Closing Thoughts

I hope that my own frustrations and explanations saved you countless hours of crying and yelling!

Now that you understand the differences between the PUT and PATCH methods, go forth and reach ascension! All jokes aside, share your newfound (or already known) knowledge with others so that they do not stumble into the same mistakes that I had.

Have you ever implemented a PUT route to update an entity? Have you ever issued a PUT request to an API expecting to update an entity but ended up with corrupted data?
