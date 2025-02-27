# How to Submit Assignments using SSH on Windows

Several of the Computer Science classes at **Cleveland State University** use the custom `turnin` command available on the `grail.eecs.csuohio.edu` server to turn in assignments.

On Windows, we recommend using [Mobaxterm](https://mobaxterm.mobatek.net/) as your SSH client. We also provide guides for using [PuTTY](https://www.putty.org/) and [WinSCP](https://winscp.net/eng/index.php).


## Guides

- [How to Submit Assignments using Mobaxterm on Windows](./ch1.3.1-mobaxterm.md)
- [How to Submit Assignments using PuTTY on Windows](./ch1.3.2-putty.md)
- [How to Submit Assignments using WinSCP on Windows](./ch1.3.3-winscp.md)


## Reference

### CSU Linux Servers' User Account Format

If you are taking a CIS course this semester that requires Linux, you should have access to CSU's Linux servers. To login, use the following format for your credentials:

**Username:** `<first two letters of your first name (lowercase)><first six letters of your last name (lowercase)>`
\
**Password:** `<CSU ID><first letter of your last name (uppercase)>`

<div class="warning">

**Warning:**

Because your CSU ID is known by instructors and many other staff, **you _MUST_ change your password after the first time you log in**.

</div>

#### Example

For John Doe with a CSU ID of 1234567:

**Username:** `jodoe` (since "Doe" is only 3 letters, we simply use those 3 letters)
\
**Password:** `1234567D`


### CSU Linux Server Layout

CSU's Linux servers have the following networking layout:

![CSU Linux Servers](images/csu-linux-server-layout.png)

<div class="warning">

**Warning:**

You may not compile or run any of your own programs on Grail.

</div>

To access any of the servers "behind" grail and spirit, ssh into grail first, then ssh into the desired server. For example, to access chopin12, use these commands:
```bash
ssh jodoe@grail.eecs.csuohio.edu
ssh chopin12
```

To see a list of all the CSU Linux computers available on CSU's network, ssh into grail, and then execute:
```bash
cat /etc/hosts
```
