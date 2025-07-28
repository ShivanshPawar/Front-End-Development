# 🦁 Sheryians Coding School Cohort – Day50 Learnings

# 💻 Project: Collaborative Calculator (Addition, Subtraction, Multiplication, Division)


## 👥 Collaborator Roles

| Developer | Role                   | Task Assigned                   |
| --------- | ---------------------- | ------------------------------- |
| Dev A     | Project Lead           | Setup, structure, merging       |
| Dev B     | Feature Developer      | `add()` function                |
| Dev C     | Feature Developer      | `subtract()` function           |
| Dev D     | Feature Developer & QA | `multiply()`, `divide()`, tests |

---

## 🏗 Folder Structure

```
calculator/
├── index.html
├── script.js
└── README.md
```

---

## 🔄 Git-Based Workflow in Action

### 1. 🎯 Project Initialized by Dev A

```bash
mkdir calculator && cd calculator
git init
echo "# Calculator" > README.md
touch index.html script.js
git add .
git commit -m "Initial commit with basic files"
git remote add origin <github-repo-url>
git push -u origin main
```

---

### 2. 🌿 Collaborators Create Their Branches

Each developer checks out a new branch for their task.

```bash
# Dev B
git checkout -b feature/add

# Dev C
git checkout -b feature/subtract

# Dev D
git checkout -b feature/multiply-divide
```

---

## 🧪 Let's See Their Code Contributions

---

### 🔧 Dev B (Add Operation)

```js
// script.js
function add(a, b) {
    return a + b;
}
```

```bash
git add script.js
git commit -m "Add: add() function"
git push origin feature/add
```

Pull Request opened → Reviewed by Dev A → Merged into `main`

---

### 🔧 Dev C (Subtract Operation)

```js
function subtract(a, b) {
    return a - b;
}
```

```bash
git add script.js
git commit -m "Add: subtract() function"
git push origin feature/subtract
```

---

### 🔧 Dev D (Multiply & Divide)

```js
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Divide by zero!";
    }
    return a / b;
}
```

---

### 🧪 Dev D Adds Test Function

```js
function testCalculator() {
    console.log("Add: ", add(2, 3));         // 5
    console.log("Subtract: ", subtract(5, 2)); // 3
    console.log("Multiply: ", multiply(4, 3)); // 12
    console.log("Divide: ", divide(10, 2));    // 5
}
```

---

## 💥 Common Problems Faced During Collaboration

---

### ⚠️ 1. Merge Conflicts (Same file: `script.js`)

Both Dev C and D work on `script.js`. When Dev D pulls after Dev C’s merge:

```bash
CONFLICT (content): Merge conflict in script.js
```

💡 **Solution**: Dev D manually resolves conflict.

```js
// Merged script.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error";
    return a / b;
}
```

---

### ⏳ 2. Not Pulling Latest Main Before Merging

> Dev D pushes without syncing latest main → PR shows outdated changes.

💡 **Solution**:

```bash
git checkout main
git pull origin main
git checkout feature/multiply-divide
git rebase main
```

---

### 😵 3. Overwriting Someone's Code

> Dev C force-pushes an old version of `script.js` to `main`.

💡 **Fix**: Use **protected branches** and **Pull Request Reviews** to prevent this.

---

## ✅ Final `script.js` After All Merges

```js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Divide by zero!";
    return a / b;
}

function testCalculator() {
    console.log("Add: ", add(2, 3));         // 5
    console.log("Subtract: ", subtract(5, 2)); // 3
    console.log("Multiply: ", multiply(4, 3)); // 12
    console.log("Divide: ", divide(10, 2));    // 5
}
```

---

## 🔒 Best Practices for Teams

* ✅ Use `feature/` or `bug/` prefixes in branches
* ✅ Protect `main` from direct pushes
* ✅ Use PRs with mandatory code reviews
* ✅ Resolve conflicts early
* ✅ Write unit tests or test logs before merging

---


## Created with ❤️ by Shivansh