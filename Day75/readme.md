# 🦁 Sheryians Coding School Cohort – Day75 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)


### 1. **React Functional Components**

* `App`, `Create`, and `Read` are all **function components**.
* Function components are the building blocks in modern React (instead of class components).
* You’re exporting each component with `export default ...` so they can be imported into other files.

---

### 2. **JSX (JavaScript XML)**

* Inside `return(...)` you’re writing HTML-like syntax (`<div>`, `<h1>`, `<form>`) which is actually **JSX**.
* JSX lets you mix **JavaScript expressions** with HTML-like markup. Example:

  ```jsx
  <ol>{renderuser}</ol>
  ```

  Here, `{renderuser}` is JavaScript inside JSX.

---

### 3. **React Hooks – `useState`**

* Both `App` and `Create` use:

  ```js
  const [users, setuser] = useState([...])
  const [fullname, setfullname] = useState("")
  const [age, setage] = useState("")
  ```
* `useState` hook gives **reactive state variables**.
* When state changes → component re-renders with new values.
* Example: typing in the input updates `fullname` state.

---

### 4. **Props (Properties)**

* Data flows **top → down** (parent to child).
* `App` passes:

  ```jsx
  <Read users={users} setuser={setuser} />
  ```
* In `Read.jsx` you access via `props.users` and `props.setuser`.
* In `Create.jsx` you did `console.log(props)` → shows nothing now because no props were passed.

✅ This is **props drilling** at a small scale: parent (`App`) provides data to children (`Read` / `Create`).

---

### 5. **Event Handling**

* In `Create.jsx`:

  ```jsx
  <form onSubmit={submitHandler}>
  ```
* `onSubmit` triggers your `submitHandler`.
* You call `e.preventDefault()` to stop the page refresh (default form behavior).

---

### 6. **Controlled Components (Forms)**

* Inputs are tied to state (`value={fullname}`, `onChange={...}`).
* This is called a **controlled form**, because React fully controls the input’s value via state.
* Advantages:

  * Easy validation
  * Can reset/clear forms
  * Sync with other UI parts

---

### 7. **Creating Data (Add User)**

* You’re preparing:

  ```js
  const newuser = { fullname, age }
  ```
* Right now you `console.log(newuser)` instead of updating state.
* Next step would be:

  ```js
  props.setuser((prev) => [...prev, newuser])
  ```

  → which **adds new user into the array** in parent `App`.

✅ This covers the **"Create" (C in CRUD)** concept.

---

### 8. **Reading Data (Render a List)**

* In `Read.jsx`:

  ```js
  const renderuser = users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ));
  ```
* You are **reading** from state and rendering a list.
* This is the **"Read" (R in CRUD)** concept.
* Important: always use a stable `key` (index works here but usually use `id`).

---

### 9. **Component Communication**

* `App` holds the **source of truth** (`users` state).
* `Create` should eventually **update** it (via `setuser`).
* `Read` is **reading** it.
* This is the fundamental React data flow: **state up, props down**.

---

### 10. **Project Structure / File Splitting**

* You separated files:

  * `App.jsx` (main container)
  * `Create.jsx` (form)
  * `Read.jsx` (list)
* This is good practice: each file should be **one component**.

---

## ⚡ What You’ve Learned With This Example

✔️ Functional components
✔️ JSX basics
✔️ React state (`useState`)
✔️ Props (data passing)
✔️ Event handling in forms
✔️ Controlled inputs
✔️ Reading & rendering lists
✔️ Creating data (new user)
✔️ Component communication (parent-child)
✔️ File-based component structure


---


## Created with ❤️ by Shivansh