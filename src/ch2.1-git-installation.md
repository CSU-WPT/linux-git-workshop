# How to Install git

## Windows

1. Go to the latest [Git Windows installer](https://gitforwindows.org/) and download the latest version.

2. Follow the instructions as provided by the installer wizard.

## MacOS

There is a good chance it is already installed on your machine. Try running this command to check

```bash
git --version
```

If it is not installed, it will prompt to install the Command Line Tools. Click "Install" in the pop-up window.

Once finished, the Git version will be displayed in the Terminal, confirming a successful installation.

## Linux

Install it using your favorite package manager.

#### Debian / Ubuntu (apt)

```bash
sudo apt-get install git-all
```

#### Fedora (dnf)

```bash
sudo dnf install git
```

#### Arch (pacman)

```bash
sudo pacman -S git
```

For other Linux distros you can use the same name for the package `git-all`

# After the installation

Make sure git is installed correctly by opening your terminal and run:

`git --version`

If it is installed correctly, you should see:

`git version <version-number>`

Next, you should verify that Git is configured properly by setting up your name and email. To check if you have already configured Git, navigate to the terminal and run:

`git config --global --list`

If Git has been configured, the terminal will return your set username and email. If this is not the case, you need to configure Git by completing the following:

To set your name run:

`git config  --global user.name <your name>`

To set your email run:

`git config  --global user.email <your email>`

This information is required to use Git and must be entered before committing any of your changes. For additional information regarding Git setup and initial requirements, view the [official Git documentation](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).
