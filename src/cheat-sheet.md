# Cheat Sheet

## Basic Linux Commands

### SSH and File Transfer

### SSH - Secure Shell

`ssh [username]@[server].eecs.csuohio.edu`

Allows you to remotely connect to a school server.

If outside the school Wi-Fi, you can only connect to **spirit** or **grail** first.

Once connected to **spirit** or **grail**, you can SSH into any other school server.

**grail** is for turning in assignments only, not for work.

### SCP - Secure Copy

`scp [file] [username]@[server].eecs.csuohio.edu:[directory]`

Copies a file from your computer to the school server.

Use `~` for your home directory or specify a full path, e.g., `~/CIS340/Assignment1`.

All servers share the same directories and files.

### File and Directory Management

### List Directory Contents

`ls`

Displays the contents of your current directory (folder).

You start in your home directory upon connecting to a school server.

### Create a Directory

`mkdir [name]`

Creates a new directory (folder).

Useful for organizing coursework, e.g., `mkdir CIS340`.

### Remove Files or Directories

`rm [directory/file]`

Deletes a file or directory completely, including all its contents.

### Change Directory

`cd [directory]`

Navigates into a directory.

Use `cd ..` to move up one directory level.

### Create a File / Update Timestamp

`touch [file]`

Updates the last accessed timestamp of a file.

If the file does not exist, it creates a new empty file.

### Editing and Modifying Files

### Text Editor (Nano)

`nano [file]`

Opens a simple built-in text editor to modify text files.

### Echo Text Output

`echo [string]`

Displays a string in the terminal.

`echo [string] > [file]`

Writes the string into a file (overwrites existing content).

`echo [string] >> [file]`

Appends the string to the end of an existing file.

### Move / Rename Files and Directories

`mv [source] [destination]`

Moves a file or directory to another location.

Moving a file to another file renames it.

Moving a file to a directory places it inside that directory.

### Copy Files and Directories

`cp [file] [destination]`

Copies a file to another file or directory.

If copying to a file, it will overwrite the existing file.

If copying to a directory, it keeps the original name.

### Assignment Submission

### Turn in Assignments

`turnin -c [class] -p [assignment] [file]`

Used to submit assignments via the server.

Only available on grail.

Must run this command from the directory containing the file.

Your professor will provide the correct parameters for each assignment.

### Exiting the Server

### Close Connection

`exit`

Logs you out of the server.

Not required but recommended for good practice.

## Git commands

