# 🦁 Sheryians Coding School Cohort – Day77 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)

## 📒 Concepts Covered in This Code

---

## 1. **React Functional Components**

* You have 3 components here:

  * `App` → Parent component.
  * `Create` → Child (for adding todos).
  * `Read` → Child (for displaying/deleting todos).

✅ Concept: React apps are built with **components** that can share data via **props**.

---

## 2. **useState Hook**

```jsx
const [todos, settodos] = useState([
  { id: 1, title: "Finish your work", isCompleted: false }
]);
```

* `todos` → State variable (array of todo objects).
* `settodos` → Function to update that state.
* `useState([...])` → Initializes with 1 todo.

💡 Important: **State is immutable** → you can’t directly change it. You must always create a new copy (`[...todos, newtodo]`).

---

## 3. **Props (Data Sharing Between Components)**

```jsx
<Create todos={todos} settodos={settodos}/>
<Read todos={todos} settodos={settodos}/>
```

* Parent (`App`) passes **state & setter function** down to children as props.
* `Create` → uses `settodos` to add new todos.
* `Read` → uses `settodos` to delete todos.

✅ This is **props drilling**: passing data down to child components.

---

## 4. **Form Handling**

In `Create`:

```jsx
<form onSubmit={SubmitHandler}>
  <input value={title} onChange={(e) => settitle(e.target.value)} />
  <button>Create todo</button>
</form>
```

* Controlled Component: input’s `value` is bound to state.
* `onChange` updates state on every keystroke.
* `onSubmit` prevents page reload (`e.preventDefault()`) and creates a new todo.

---

## 5. **Adding Data to State**

Two ways:

```jsx
// Long way
let copytodos = [...todos];
copytodos.push(newtodo);
settodos(copytodos);

// Shorter way
settodos([...todos, newtodo]);
```

* Both are correct.
* **Efficient way** is the second one.

---

## 6. **Deleting Data (Immutable State Update)**

In `Read`:

```jsx
const DeleteHandler = (id) => {
  const filtedtodo = todos.filter((todo) => todo.id != id);
  settodos(filtedtodo);
};
```

* `filter()` returns a **new array without the deleted todo**.
* This ensures immutability → React detects changes and re-renders.

---

## 7. **Rendering Lists in React**

```jsx
const rendertodos = todos.map((todo) => {
  return (
    <li key={todo.id}>
      {todo.title} <span onClick={() => DeleteHandler(todo.id)}>Delete</span>
    </li>
  );
});
```

* `map()` is used to **loop through todos**.
* `key={todo.id}` is required → helps React track each item uniquely for performance.

---

## 8. **Unique IDs with nanoid**

```jsx
id: nanoid()
```

* `nanoid()` creates unique IDs for each todo.
* Prevents issues where multiple items might have the same key.

---

## 9. **Event Handling**

```jsx
<span onClick={() => DeleteHandler(todo.id)}>Delete</span>
```

* `onClick` → handles events in JSX.
* Use arrow function `() => DeleteHandler(todo.id)` to pass params.

---

## 10. **Styling in React (You used Tailwind)**

```jsx
<div className="text-white w-screen h-screen bg-gray-900 flex justify-between p-10">
```

* `className` replaces `class` in React.
* You used **Tailwind CSS** → utility-first CSS framework.

---

# 🎯 Extra Topics You Should Know (from this project)

### 11. **Separation of Concerns**

* UI (`Read` and `Create`) and Logic (`App`) are separated.
* Makes code more modular & maintainable.

### 12. **One-way Data Flow**

* Data flows **downward** from `App → Create/Read` via props.
* Child components cannot change parent’s state directly, they only call setters provided as props.

### 13. **Reconciliation & Keys**

* React uses `keys` in lists to optimize re-renders.
* Without keys, React would unnecessarily re-render the whole list.

### 14. **Pure Functions**

* Your components are pure → output depends only on input (props/state).
* No side effects (except `setState`).

---

# 🎨 Different Ways to Add CSS in React

You asked about styling, so here’s the **big picture**:

### 1. **Normal CSS**

* Write `.css` file and import it.

```jsx
import "./App.css";
```

### 2. **Inline CSS**

```jsx
<div style={{ color: "red", backgroundColor: "black" }}>Hello</div>
```

### 3. **CSS Modules**

* Scoped CSS → only applies to the component.

```css
/* App.module.css */
.title { color: blue; }
```

```jsx
import styles from "./App.module.css";
<h1 className={styles.title}>Hello</h1>
```

### 4. **Sass/SCSS**

* Use `.scss` files → supports variables, nesting, mixins.

```scss
$mainColor: red;
.title {
  color: $mainColor;
}
```

### 5. **Styled Components**

* CSS-in-JS library.

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
`;
```

### 6. **Tailwind CSS (Utility-first)**

* You’re using this here.
* Example:

```jsx
<div className="bg-gray-900 text-white p-4 rounded">Hello</div>
```

### 7. **Framework-based (like Material UI, Chakra UI, Shadcn)**

* Prebuilt React component libraries with styling included.

---

# 📌 Final Recap

✅ From this code, you learned:

* Functional Components
* useState Hook
* Props Drilling
* Controlled Components (Form Handling)
* Adding & Deleting State Data (Immutable Updates)
* Rendering Lists with `map()` & `key`
* Event Handling (`onClick`, `onSubmit`)
* Styling with Tailwind

✅ From my side, I added:

* Keys & Reconciliation
* One-way Data Flow
* Pure Functions
* **All 7 ways of adding CSS in React**

---

## Created with ❤️ by Shivansh
