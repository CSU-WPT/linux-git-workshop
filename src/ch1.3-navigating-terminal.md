# Navigating the Linux Environment


## Where am I? Nearby Home or School??

The `pwd` command (print working directory) shows your current location in the file system. The working directory is where file operations take place by default unless specified otherwise. To check where you are, use `pwd`.

To change the working directory, use `cd`:

- Move to the root directory:
  ```
  cd /
  pwd
  ```

- Move to the "home" directory from root:
  ```
  cd home
  pwd
  ```

- Go up one level to the parent directory:
  ```
  cd ..
  pwd
  ```

- To return to your home directory:
  ```
  cd
  pwd
  ```

You can also move up multiple levels:
```
cd ../..
pwd
```

To go directly to the "etc" directory from home:
```
cd ../../etc
pwd
```

Paths can be relative (depending on your current directory) or absolute (starting with `/`).


## Are you at 16th Street, Linux Ave?

Most examples so far have used relative paths, meaning the location you navigate to depends on your current directory. For instance, moving to the "etc" directory works from the root:

```
cd /
cd etc
```

But if you're in your home directory and try `cd etc`, you'll get an error because the command is relative to your current location. 

Absolute paths, however, work regardless of your current directory. These paths start with a `/`, indicating the root directory. For example:

```
cd /etc
```

This will always take you to the "etc" directory, no matter where you are. Similarly, running `cd` alone returns you to your home directory. Another absolute path shortcut is using `~`, which refers to your home directory:

```
cd ~
cd ~/Desktop
```

To navigate directly to a specific folder, use an absolute path with `/home/USERNAME/`:

```
cd /home/USERNAME/Desktop
```

The prompt updates to reflect your current location in the file system, with `~` representing your home directory. Understanding absolute paths is key as you work with files and directories.
