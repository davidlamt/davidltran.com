---
title: "How to Run a Script on Boot Using rc.d with Linux"
date: "2017-08-27"
tags: ["development"]
---

Recently, I have been helping out with a standalone payment peripheral at work. This is a product that will provide merchants the ability to complete an entire transaction, including PIN and signature, on a single device.

We are currently writing a demonstration application that will run directly on the device itself. During this process, we had to figure out how to instruct the device to run that application on boot.

I am not very familiar with the Linux operating system and its inner workings, but I was able to reach our goal after several failed attempts and numerous visits to Stack Overflow.

This short guide is for the **System V init system**. It would be best to verify that this is the [correct method for your environment](https://unix.stackexchange.com/a/196183) before continuing!

## Runlevel

Before we start editing any files, we need to figure out which runlevel our machine starts on. We can determine this by running the following command:

```bash
runlevel
```

Keep note of your runlevel as it will be used later.

Contrary to belief, runlevels are not the stages that the system goes through when starting up. It is more akin to the configurations that are applied.

[This article](https://www.linux.com/news/introduction-services-runlevels-and-rcd-scripts) gives an introduction to runlevels and other similar constructs. I recommend reading it before continuing!

## rc*.d

No, this section's title is not a typo.

Navigate to your `/etc/` folder and you should see many rc*.d folders like rc1.d, rc2.d, etc.

First of all, the .d suffix indicates those are directories. These rc directories contain instructions that should be executed according to the runlevel.

For instance, rc1.d contains instructions that should be evoked when the runlevel is 1. rc2.d corresponds with runlevel 2 and so on.

As a side note, the .d suffix is used to differentiate the command (rc1) from the directory (rc1.d) the command uses.

## Adding a Script

Let's assume that you have a script called `run-demo.sh` that starts your application and you would like the script to run on boot.

We need to create a soft symbolic link to that script within the correct rc*.d folder for your runlevel.

Let's also assume that your `run-demo.sh` script is within the `/etc/init.d` directory. This directory is used to store scripts that should be executed, but this process will also work if you place the script anywhere else.

The general command to create this symbolic link is as follows:

```bash
ln -s <LOCATION_OF_SCRIPT> /etc/rc<RUNLEVEL>.d/<T><XY><DESIRED_NAME>
```

With our assumptions and some other magic, here is a fully implemented command as an example:

```bash
ln -s /etc/init.d/run-demo.sh /etc/rc5.d/S30run-demo.sh
```

Let's dissect this!

### Symbolic Link Inspection

To begin, the `-s` modifier instructs the command to make a symbolic (also called *soft*) link instead of a hard link. This means that the created file is just a reference to another file.

Check out [this page](https://www.computerhope.com/unix/uln.htm) for more information on the `ln` command.

As previously mentioned, you will need to create a symbolic link within the correct rc*.d directory for your particular runlevel. Just replace the asterisk (\*) with the number you recorded when you ran `runlevel`.

The `TXY` prefix in the destination file instructs the machine on how and when to execute the script.

Replace `T` with either `S` to *start* the script or `K` to *kill* (shut down) the process.

Replace `XY` with a two digit number that indicates the sequence in which the script should execute.

Run `ls -l` within your rc*.d directory to see which other scripts are executed and their execution sequences. You can base your `XY` value in relation to other scripts that you want to run before and after it.

## The Moment of Truth

Okay, everything should be set. You can test if your script is ran by rebooting your machine with the `shutdown -r now` command.

If your script does not run, you should probably consider purchasing a new machine. Just kidding, use the almighty Google to debug or leave a comment and I will do my best to aid you!

## Closing Thoughts

Thanks for reading through the entire post, hopefully it made sense and helped you achieve what you were after!

Also, sorry for the terrible humor. 🙂

During this process of exploration, I found it slightly inconvenient to get a script to run using the System V init system. Maybe this is why it is becoming deprecated on newer systems.

However, many systems still keep this init system around for backwards compatibility so understanding it is beneficial.

Furthermore, despite my qualms, I still like how this method does not abstract the process too much. It makes me feel like I understand what is happening better and as a result, I am probably better informed to use other init systems.

Would you still consider using the System V init system if other init systems were available? Do you believe that the more recent methods for initializing a script is too abstracted?
