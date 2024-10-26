# What is Git?

Git is a version control system (VCS), which means that it saves, compares, and manages changes to files (usually code files) over time.

This may seem innocuous, but it's actually vital to the development cycle. Virtually all professional code is managed by some VCS, and git is by far the most common.

## Use cases

### Tracking file changes over time

Have you ever been scared to work on your code after completing a feature because you didn't break it? Git fixes this by allowing you to take a snapshot (or "commit") of your code, which you can always go back to by running a single command (`git checkout ...` or `git reset ...`).

Making multiple commits (best practice is a commit for each feature) throughout the progression of a project allows you to revert at any time to any "milestone." You'll never lose your work again[^1].

### Working on different versions of your code at the same time

Git branches allow you to work on multiple versions of your code base at the same time. For example, if you want to maintain an old, released version (e.g. adding security patches) while continuing feature development for the latest version, you could create a branch called `v1.0.0` and a branch called `dev`.

By default, git repositories have one branch named `master` or `main`. This is often used either for development or for the latest stable version of the software.

### Code collaboration

Branches (or forked repositories on a platform like GitHub) can be used by multiple developers to collaborate on the same code base. Usually, each developer works on their own branch and implements a feature. Once that feature is complete, they *merge* the branch into the `main` or `master` branch.

### Storing code remotely

Git can be used with platforms like [GitHub](https://github.com) or [GitLab](https://gitlab.com) to manage code stored in the cloud. This is an important part of the modern development cycle.

Typically, a developer creates a branch, implements their feature (or reaches some stopping point), and then commits their changes. After they commit their changes, they *push* it up to the server hosting the main code base so that others can access it.

For smaller projects, developers may skip the "creating a branch" step and commit new code directly to the `main` branch.

[^1]: Unless you delete or lose the git repository itself, or manually delete commits.