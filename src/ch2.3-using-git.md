# Using git

### Creating a repository locally (Optional)

If you were not able to create a GitHub repository and clone it locally (described in [Section 2.2](./ch2.2-create-github-account.md)), before you proceed, you will need to create a local git repository. You can do that by using the following commands:

```bash
mkdir my_repo
cd my_repo
git init
```

### Staging

Once we made some changes we will want to commit them, before we can do that we want to stage the files. This is like another layer to saving your files. This is so if you have two files you changed but only one is ready to commit, you can select the file to stage.

To stage your file run this command:

`git add file_name/folder_name`

TIP:

use this command to see the changes made.

`git status`

### Committing

Creating a commit creates a snapshot of all the staged files

TIP: For commit messages do you not use past tense, such as "I made headings blue". Use language like "Make headings blue", as if you are giving orders to the codebase.

This command creates a commit:

`git commit -m "description of the commit"`

![Drawing-1](./images/IMG_23DAA7999A27-1.jpeg)

A good way of visualizing how this works

![Drawing-2](./images/IMG_96E3138F72ED-1.jpeg)

### Branches

Branches allow you to work on different versions of your project simultaneously without affecting the main codebase

From this main code you can create branches, this allows you to make changes without the chance of ruining the main code. Think of it as a copy of your code that you can now change with zero risks.

Use this command to create a new branch:

`git checkout -b <name_of_the_branch>`

To switch branches

`git checkout <name_of_the_branch>`

![Drawing-0](./images/IMG_36D4CB635079-1.jpeg)

### Merging branches

To bring the latest changes in `branch_a` into `main`, we would first switch to the main branch...

```bash
git checkout main
```

and then run the `git merge` command.

```bash
git merge branch_a
```

If the files modified in `main` and `branch_a` (after `branch_a` was created or after the last merge) are mutually exclusive, then git should be able to do this automatically. However, if the same file was modified in both branches, you will probably encounter this:

```
CONFLICT (content): Merge conflict in my_file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

Before you do anything else, you will need to fix the merge conflicts. Git represents these conflicts within each file using the following template (or something similar, if you've modified the default settings):

```
<<<<<<< HEAD
Change in the main branch
=======
Change in branch_a
>>>>>>> branch_a
```

To resolve this, replace the text above with the final desired version (it could be one or the other, or a combination of both). Once you've resolved all of the conflicts in (and saved) each file, stage the files and create a new commit. This completes the merge process.

Afterwards, you may delete `branch_a`.

```bash
git branch -d branch_a
```

#### Troubleshooting: Merging with remote branches

```
From github.com:gaverkov/mixed_volumes_proposal
 * branch            main       -> FETCH_HEA
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
```
