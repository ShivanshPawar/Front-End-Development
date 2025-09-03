# 🦁 Sheryians Coding School Cohort – Day81 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)

---

# 📒 What is Context API?

👉 Context API in React is a **state management system** that allows you to **share data globally** across components without having to pass props manually at every level.

Think of it like a **global store** (but lighter than Redux).

---

## 🔥 The Problem Without Context

Currently in your `App.jsx`:

```jsx
<Create todos={todos} settodos={settodos}/>
<Read todos={todos} settodos={settodos}/>
```

* `App` is passing `todos` and `settodos` to `Create` and `Read`.
* If tomorrow you had `<Stats>` or `<Filters>` components → you’d pass them too.
* If `Read` had a child like `<TodoItem>` → you’d pass them again.

This is **props drilling hell** 👹.

---

## ✅ Solution with Context API

We’ll create a **Context** for `todos` and `settodos`.

### 1. Create Context

`TodoContext.js`

```jsx
import { createContext } from "react";

export const TodoContext = createContext();
```

---

### 2. Provide Context (Wrap App)

In `App.jsx`:

```jsx
import { useState } from "react";
import { TodoContext } from "./TodoContext";
import Create from "./Create";
import Read from "./Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Finish your work", isCompleted: false }
  ]);

  return (
    <TodoContext.Provider value={{ todos, settodos }}>
      <div className="text-white w-screen h-screen bg-gray-900 flex justify-between p-10">
        <Create />
        <Read />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
```

🔑 Here:

* `<TodoContext.Provider>` makes `todos` & `settodos` available to **any child component** inside it.
* Now no need to pass props manually.

---

### 3. Consume Context in Child

In `Create.jsx`:

```jsx
import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Create = () => {
  const { todos, settodos } = useContext(TodoContext); // 🎯 useContext instead of props
  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newtodo = { id: nanoid(), title, isCompleted: false };
    settodos([...todos, newtodo]);
    toast.success("Todo created!");
    settitle("");
  };

  return (
    <div className="w-[45%] h-[100%] border p-10 mx-auto">
      <h1 className="text-5xl font-thin mb-10">Set <span className="text-red-400">Reminders</span></h1>
      <form onSubmit={SubmitHandler}>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="text-4xl font-extralight mb-6"
          type="text"
          placeholder="title"
        />
        <br /><br />
        <button className="text-xl px-5 py-2 border border-amber-50 rounded">Create todo</button>
      </form>
    </div>
  );
};

export default Create;
```

In `Read.jsx`:

```jsx
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { toast } from "react-toastify";

const Read = () => {
  const { todos, settodos } = useContext(TodoContext);

  const DeleteHandler = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
    toast.error("Todo deleted!");
  };

  return (
    <div className="w-[45%] h-[100%] border p-10 mx-auto overflow-auto">
      <h1 className="text-5xl font-thin mb-5">Please <span className="text-red-400">complete</span> your tasks</h1>
      <ol>
        {todos.map((todo) => (
          <div key={todo.id} className="w-[100%] bg-black px-5 py-5 border rounded mb-2">
            <li className="text-2xl font-extralight flex justify-between">
              {todo.title}
              <span
                className="text-xl text-red-400 cursor-pointer"
                onClick={() => DeleteHandler(todo.id)}
              >
                Delete
              </span>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Read;
```

💡 Now neither `Create` nor `Read` receives `props` → they pull directly from `Context`.

---

# 📌 Deep Dive into Context API Concepts

1. **Provider**
   Wraps the app, supplies values (`value={{todos, settodos}}`).

2. **Consumer** (Old way, rarely used)
   Instead of `useContext`, you can use `<TodoContext.Consumer>`.

3. **useContext Hook**
   Best modern way:

   ```jsx
   const { todos, settodos } = useContext(TodoContext);
   ```

4. **Multiple Contexts**
   You can have different contexts (AuthContext, ThemeContext, TodoContext).

   Example:

   ```jsx
   <AuthContext.Provider value={{user, login}}>
     <ThemeContext.Provider value={{darkMode, toggleTheme}}>
       <App />
     </ThemeContext.Provider>
   </AuthContext.Provider>
   ```

5. **Performance Concern**

   * If you put **everything** inside Context, small changes will re-render too many components.
   * Best practice: split contexts (Todos, Auth, Theme separately).

---

# 📌 Extended Topics (Building on Context)

1. **Context + Toastify**

   * Show global notifications for actions (already in your code).

2. **Context + Reducer (useReducer)**

   * For larger apps, instead of `setTodos`, you use `dispatch` actions (like mini Redux).

   Example:

   ```jsx
   const reducer = (state, action) => {
     switch(action.type) {
       case "ADD_TODO": return [...state, action.payload];
       case "DELETE_TODO": return state.filter(t => t.id !== action.payload);
       default: return state;
     }
   };

   const [todos, dispatch] = useReducer(reducer, []);
   ```

   Then pass `dispatch` via Context.

3. **Context vs Redux**

   * Context is simpler, built-in.
   * Redux is more powerful for large-scale apps (middlewares, dev tools, time-travel debugging).

---

# 🎨 Bonus: Styling in React (recap)

You asked earlier → ways to style:

1. **Normal CSS File** → `import "./App.css"`.
2. **CSS Modules** → `App.module.css` (scoped styles).
3. **Inline Styles** → `style={{color:"red"}}`.
4. **Styled Components** → CSS-in-JS library.
5. **SCSS / SASS** → preprocessors with nesting, variables.
6. **Tailwind CSS** → utility-first framework (your current project).
7. **UI Libraries** → MUI, Chakra, AntD, ShadCN.

---

# 📝 Recap Notes

* Context API = solve **props drilling**.
* Steps: **createContext → Provider → useContext**.
* Use `Toastify` for notifications → integrates well with Context.
* Validation (`react-hook-form`) + Global State (`Context`) + Notifications = professional app flow.
* Styling has many options → you’re using **Tailwind**, but be aware of others.
* Advanced: Context + `useReducer` = powerful state management.

---

## Created with ❤️ by Shivansh