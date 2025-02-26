# Using the Linux Terminal

The Linux command line is a text interface to your computer. Often referred to as the shell, terminal, console, prompt or various other names, it can give the appearance of being complex and confusing to use. However, the basics are actually quite simple and easy to learn.

**Side note:** If you are interested in learning more about the history of the terminal, read [Section 1.2.1](./ch1.2.2-terminal-origins.md) for more information.

## Accessing the Terminal Over SSH

Most of you are probably running Windows or MacOS on your personal computer, so you will need to access a linux terminal remotely using a Secure Shell (SSH) connection. On Windows, you can do this using [MobaXTerm](./ch1.3.1-mobaxterm.md), [PuTTY](./ch1.3.2-putty.md), or [WinSCP](./ch1.3.3-winscp.md). Read [Section 1.3](./ch1.3-ssh-turnin.md) for more information on how to access CSU's Linux servers.

### Using Google Cloud Shell

You also have the option of using Google Cloud Shell, which is free. Simply go to <https://shell.cloud.google.com/>. After the shell is provisioned, you should see the environment below:

![Google Cloud Shell](./images/google-cloud-shell.png)

Your linux shell should be available at the bottom of the page.


## Running your First Command

To run your first command, click inside the terminal window to ensure it's active, then type the following in lowercase and press Enter:

    pwd


This will display your current directory path (likely something like `/home/YOUR_USERNAME`), followed by the prompt text again.

The prompt indicates the terminal is ready for your next command. When you see references to "command prompt" or "command line," they simply mean the place where you type commands in the terminal.

When you run a command, any output will typically appear in the terminal. Some commands display a lot of text, while others may not show anything if they complete successfully. If a new prompt appears right away, the command likely succeeded.

## Navigating the Linux Environment
