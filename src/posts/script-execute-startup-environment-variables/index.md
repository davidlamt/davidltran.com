---
title: "Script Execution on Startup with Environment Variables"
date: "2017-10-15"
tags: ["development"]
---

In a [previous post](/blog/run-script-on-boot-using-rcd), I discussed how to have to a script execute on startup on a system that uses the System V init system.

Everything should go well. Until you try to access non-standard environment variables within your script. The script runs fine when executed manually but nothing seems to happen on a system restart.

Everything is on fire.

Let's put out the flames.

## Debugging the Script

You are here because your script is seemingly not executing on a system boot and you have no idea why. No need for alarm - I have a PhD in mind reading. 🙂

One of the first steps you should take is to log your script's output. There are several reasons for logging:

1. Determine if your dang script is executing in the first place.
2. If it is executing, we need to determine where (which line) things are going astray.

Take a look at this Sever Fault [answer](https://serverfault.com/questions/103501/how-can-i-fully-log-all-bash-scripts-actions/103569#103569) for instructions on how to log your script's output to a file. Make sure to log appropriate sections of your script (i.e., everything).

If your logs reveal that the issue lies with the script not being able to locate certain environment variables, continue on as that was my problem. If not, you should now have some direction towards a solution!

## Execution Environments

"Why the heck does my script run fine when I execute it but nothing happens when I restart the system?"

I am glad you asked.

The issue is likely that the script does not have access to the environment variable(s). When the script is executed by the init system, only standard environment variables (PATH, TERM, etc.) are available.

## Workaround

One solution would be to avoid the environment variable and use its value directly. However, this may not always be the optimal solution for modularity and maintainability.

We can also source the file that exports that environment variable. In my case, the `/etc/profile` file exported the environment variable my script required.

As a result, I added the following code snippet to my script. Modify it as necessary for your setup!

```bash
# Checks if the file exists and then sources (executes) it
[ -f /etc/profile ] && ./etc/profile

# Checks if the specified variable is a zero-length string and stops the script if it is because the variable was not loaded
if [ -z "$MY_ENVIRONMENT_VARIABLE" ] ; then
    exit 1;
fi;

# Now you can use that environment variable freely!
```

## Closing Thoughts

Even if the environment variable was not the root of your problem, I hope that you were able to find a solution through the logs!

Plus, you now understand a bit more about the execution environment of scripts when they are not executed manually. There are many caveats that still baffles me when I give control of a script's execution to the system.

This was especially true when I was attempting to automate certain tasks using [Cron](https://en.wikipedia.org/wiki/Cron). Maybe I will dedicate a future blog post around that topic!

Are there any other "gotchas" when we relinquish control of our scripts to the system? What is your preferred method of debugging a script that will not be executed by a user?