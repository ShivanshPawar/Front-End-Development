# 🦁 Sheryians Coding School Cohort – Day59 Learnings


## ✅ **📚 Project Overview: Library System**

The goal of this mini project is to simulate a simple library system where:

* You can **add books** to a library.
* You can **list all available books**.
* Each book has a **read status** that you can toggle.
* Each book can **display its own information** (name, author, price, read status).

---

## 🔧 **Concepts Covered**

### 1. **Object-Oriented Programming (OOP)**

* **Classes**: `Library` and `Books` are created using ES6 `class` syntax.
* **Objects**: Instances like `book1`, `book2`, etc. are created from the `Books` class.
* **Encapsulation**: Properties and methods related to books and the library are bundled together inside their respective classes.

---

### 2. **Class: `Library`**

```js
class Library {
    constructor() {
        this.books = [];
    }

    addBooks(books) {
        this.books.push(...books);
    }

    listAllBooks() {
        this.books.forEach(function (books, idx) {
            console.log(`${idx + 1}) ${books.name}`);
        });
    }
}
```

#### 🔍 Breakdown:

| Element          | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| `constructor()`  | Initializes the library with an empty array `books`.                     |
| `addBooks()`     | Adds one or more books to the library using the spread operator (`...`). |
| `listAllBooks()` | Iterates through `this.books` and prints each book's name.               |

---

### 3. **Class: `Books`**

```js
class Books {
    constructor(name, isbn, price, author) {
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }
```

#### 🔍 Breakdown:

| Property     | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| `name`       | Book name                                                         |
| `isbn`       | Book identifier                                                   |
| `price`      | Book price                                                        |
| `author`     | Book's author                                                     |
| `readStatus` | A boolean to show whether you've read the book (default: `false`) |

---

### 4. **Method: `changeReadStatus()`**

```js
changeReadStatus() {
    this.readStatus = !this.readStatus;
}
```

* **Toggles** the read status from `false` to `true` or vice versa.

---

### 5. **Method: `info()`**

```js
info() {
    console.log(
        `${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you ${this.readStatus ? "have" : "have not"} read it. and is available for ${this.price} rupees on amazon.`
    );
}
```

* This method shows complete information about the book, including:

  * **Read status emoji** ✅/❌
  * Book details
  * A conditional sentence based on whether the book is read or not

---

## 🧠 **Logic Behind the Project**

1. **Initialization**:

   ```js
   let cbLibrary = new Library();
   ```

   * Creates a new Library object with an empty array.

2. **Creating Book Instances**:

   ```js
   let book1 = new Books(...), book2 = new Books(...), book3 = new Books(...);
   ```

3. **Adding Books to Library**:

   ```js
   cbLibrary.addBooks([book1, book2, book3]);
   ```

4. **User-Friendly Console Logs**:

   ```js
   console.log(`Welcome to the CB Library!`);
   console.log(`${cbLibrary.books.length} Books Available in the library`);
   cbLibrary.listAllBooks();
   ```

5. **Using Object Methods**:

   ```js
   book1.changeReadStatus();
   book1.info();
   book2.info();
   book3.info();
   ```

---

## 🔁 **Key JavaScript Concepts Applied**

| Concept                  | Usage Example                                              |
| ------------------------ | ---------------------------------------------------------- |
| Classes & Constructors   | `class Books`, `class Library`                             |
| `this` keyword           | Refers to current object (`this.readStatus`, `this.books`) |
| Spread Operator          | `...books` inside `addBooks()`                             |
| Array Methods            | `.push()`, `.forEach()`                                    |
| String Interpolation     | Template literals with `${}`                               |
| Ternary Operator         | Used in `info()` method                                    |
| Method Chaining Logic    | Toggle status + Display info                               |
| Modularity & Reusability | Clean separation of `Library` and `Books` functionality    |

---

## 📦 Output Example

```bash
Welcome to the CB Library!
3 Books Available in the library
1) The Alchemist by Paulo Coelho
2) The Power of Now by Eckhart Tolle
3) Atomic Habits by James Clear

✅ The Alchemist by Paulo Coelho is written by Paulo Coelho and you have read it. and is available for 500 rupees on amazon.
❌ The Power of Now by Eckhart Tolle is written by Eckhart Tolle and you have not read it. and is available for 600 rupees on amazon.
❌ Atomic Habits by James Clear is written by James Clear and you have not read it. and is available for 700 rupees on amazon.
```

---


## Created with ❤️ by Shivansh
