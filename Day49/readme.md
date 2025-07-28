# 🦁 Sheryians Coding School Cohort – Day49 Learnings


# 📘 Git Explained Simply


## 🧠 What is Git?

Git is a **version control system**. Think of it like a **history book** for your project. 
 
Git helps you:
 
* 🔄 Go back to older versions (undo mistakes)
* 👨‍👩‍👧‍👦 Collaborate without overwriting each other’s work
* 🕵️ Track what was changed, when, and by whom
* 🧪 Experiment safely with **branches**
 
---
 
## 🗂 Key Git Concepts

* **Repository (Repo)**: The main project folder that Git tracks (the history book).
* **Working Directory**: The actual local folder where you edit your files.
* **Staging Area (Index)**: A temporary place where changes wait before being committed.
* **Commit**: A snapshot of the project with a description of changes.
* **Branch**: A separate timeline of your project (like a new chapter).
* **Remote Repository**: Hosted version on platforms like GitHub/GitLab/Bitbucket for collaboration.
 
---

## 🧾 Common Git Commands – Cheat Sheet

| Category          | Command                                | Description                                           | Example                                                  |
| ----------------- | -------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------- |
| **Basic Setup**   | `git config --global user.name "..."`  | Set your global Git username                          | `git config --global user.name "John Doe"`               |
|                   | `git config --global user.email "..."` | Set your global Git email                             | `git config --global user.email "john@email.com"`        |
|                   | `git init`                             | Initialize Git in current folder                      | `git init`                                               |
|                   | `git clone <url>`                      | Clone/download repo from remote                       | `git clone https://github.com/user/repo.git`             |
| **Status**        | `git status`                           | See current changes and staging status                | `git status`                                             |
| **Staging Files** | `git add <file>` or `git add .`        | Add file(s) to staging area                           | `git add index.html`                                     |
| **Commit**        | `git commit -m "msg"`                  | Commit staged changes with message                    | `git commit -m "Fix login bug"`                          |
| **Diff**          | `git diff`                             | Show difference between working directory and staging | `git diff`                                               |
|                   | `git diff --staged`                    | Difference between staging and last commit            | `git diff --staged`                                      |
| **Restore/Undo**  | `git restore <file>`                   | Undo local changes                                    | `git restore index.html`                                 |
|                   | `git restore --staged <file>`          | Unstage file                                          | `git restore --staged index.html`                        |
| **Log/History**   | `git log`                              | Show full commit history                              | `git log`                                                |
|                   | `git log --oneline`                    | Short version of log                                  | `git log --oneline`                                      |
|                   | `git show <commit_hash>`               | Show details of a commit                              | `git show a1b2c3d4`                                      |
| **Branching**     | `git branch`                           | List branches                                         | `git branch`                                             |
|                   | `git branch <name>`                    | Create new branch                                     | `git branch feature-login`                               |
|                   | `git checkout <name>`                  | Switch branches                                       | `git checkout feature-login`                             |
|                   | `git checkout -b <name>`               | Create and switch to new branch                       | `git checkout -b develop`                                |
|                   | `git merge <name>`                     | Merge given branch into current one                   | `git merge develop`                                      |
|                   | `git branch -d <name>`                 | Delete branch                                         | `git branch -d feature-login`                            |
| **Remote Repo**   | `git remote add origin <url>`          | Add remote repository                                 | `git remote add origin https://github.com/user/repo.git` |
|                   | `git remote -v`                        | View remote repos                                     | `git remote -v`                                          |
|                   | `git push origin <branch>`             | Push commits to remote                                | `git push origin main`                                   |
|                   | `git pull origin <branch>`             | Pull latest changes from remote                       | `git pull origin main`                                   |
|                   | `git fetch origin`                     | Download refs and objects from remote                 | `git fetch origin`                                       |

---

## 📌 Explanation of Key Commands

* **`git init`** – Creates a `.git` folder in your project; enables version control.
* **`git clone`** – Download a copy of an existing project.
* **`git add`** – Prepares changes for a commit (adds to staging area).
* **`git commit`** – Saves changes with a message (snapshot).
* **`git status`** – Shows status of files (staged, modified, etc.).
* **`git branch`, `git checkout`** – Manage branches for features or fixes.
* **`git push`** – Send your commits to GitHub (remote).
* **`git pull`** – Get updates from the remote to stay in sync.

---

## 📝 Best Practices

* ✔ **Commit Frequently**: Save logical units of work.
* ✔ **Write Clear Messages**: What/why you changed something.
* ✔ **Use Branches**: Keep main branch stable by developing in separate branches.

---

## 📚 Git Interview Questions

<details>
<summary><strong>1. What is Git and why is it important?</strong></summary>
Version control system used for tracking code changes, collaborating with others, and reverting to previous versions.
</details>

<details>
<summary><strong>2. Difference between `git add`, `git commit`, and `git push`?</strong></summary>
- `git add`: Stages files  
- `git commit`: Saves changes locally  
- `git push`: Uploads commits to remote repo
</details>

<details>
<summary><strong>3. What is a branch and why is it useful?</strong></summary>
A separate line of development for working on new features or fixes without disturbing the main branch.
</details>

<details>
<summary><strong>4. How do you merge branches in Git?</strong></summary>
Use `git merge branch_name` to bring changes into the current branch.
</details>

<details>
<summary><strong>5. What is a remote repository?</strong></summary>
A repo hosted on platforms like GitHub. Enables collaboration and backup.
</details>

<details>
<summary><strong>6. What is a typical Git workflow?</strong></summary>
Create a branch → make changes → stage and commit → push → create pull request → merge into main
</details>

<details>
<summary><strong>7. What is a merge conflict?</strong></summary>
When changes in two branches overlap and Git needs help deciding which change to keep. Manually resolve and commit.
</details>

---

## Created with ❤️ by Shivansh
