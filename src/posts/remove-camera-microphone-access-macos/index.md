---
title: "Removing Camera and Microphone Access on macOS"
date: "2020-07-05"
tags: ["development"]
---

We've recently been working on integrating video calling into our web products at TigerConnect in response to COVID-19.

Our desktop applications prompt the user to provide permission to access their camera and microphone. On macOS, once permission is granted or denied, the application shows up under the appropriate security setting. At this point, the application no longer displays the permission prompt again.

In order to test this feature multiple times, we had to remove the entire permission setting for our application. Simply denying access does not work since the application still persists in the security settings (with a disabled state).

## Removing Access for an Individal Application

Use this method if you know the application's bundle ID and application ID. Check out the next section if you have issues with this approach.

```sh
tccutil reset Camera com.<bundle_id>.<app_id>
```

Replace `Camera` with `Microphone` to remove permissions for microphone access. You should be able to reset other categories like `Reminders`, `Photos`, etc. as well.

## Removing Access for All Applications

If you do not specify an identifier, the command will reset permissions for all applications. This is not necessarily bad - the applications should prompt for permission again the next time they need access.

```sh
tccutil reset Camera
```
