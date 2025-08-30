# 🦁 Sheryians Coding School Cohort – Day75 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)

---

# React Form Handling

---

## 1. **useState Hook**

* React does not allow you to directly manipulate variables if you want your UI to update.
* Instead, you store values in **state** using the `useState` hook.

Example:

```jsx
const [title, settitle] = useState("");
```

Here:

* `title` → state variable (holds the input value).
* `settitle` → function used to update the state.
* `useState("")` → initial/default value (`""` empty string here).

✅ Rule: **When state changes → React re-renders the component.**

---

## 2. **Controlled Components**

A **controlled component** means the form inputs (`input`, `checkbox`, `radio`, `select`) are **fully controlled by React state**.

* Their value/checked is **linked** to state.
* Any change is handled using `onChange`.

Example (text input):

```jsx
<input
  value={title}
  onChange={(e) => settitle(e.target.value)}
  type="text"
/>
```

* `value={title}` → binds the input value to `title` state.
* `onChange={(e) => settitle(e.target.value)}` → updates the state whenever the user types.

This way, React **knows exactly** what’s inside your input.

---

## 3. **Form Handling in React**

Unlike vanilla HTML/JS:

* In HTML → `<form>` automatically refreshes page on submit.
* In React → we usually handle it manually with `onSubmit` + `e.preventDefault()`.

Example:

```jsx
<form onSubmit={(e) => { e.preventDefault(); /* handle logic */ }}>
```

In your code, you didn’t yet add `onSubmit` but instead are preparing controlled inputs.

---

## 4. **Different Input Types**

Let’s break down each Input Types 👇

### (a) **Text Input**

```jsx
<input
  value={title}
  onChange={(e) => settitle(e.target.value)}
  type="text"
  placeholder="title"
/>
```

* `value` → text inside the input box is tied to state.
* `onChange` → updates state every time the user types.
* This is a **two-way binding**: typing changes state, state controls input.

---

### (b) **Checkbox**

```jsx
<input
  checked={completed}
  onChange={(e) => setcompleted(e.target.checked)}
  type="checkbox"
/>
```

* For checkbox, instead of `value`, we use `checked`.
* `e.target.checked` → returns **true/false** depending on whether the box is checked.

✅ This way you can store **boolean values** in state.

---

### (c) **Radio Buttons**

```jsx
<input
  value="Male"
  onChange={(e) => setgender(e.target.value)}
  checked={gender == "Male"}
  type="radio"
/> Male
```

```jsx
<input
  value="Female"
  onChange={(e) => setgender(e.target.value)}
  checked={gender == "Female"}
  type="radio"
/> Female
```

* `radio` works in a **group** (same name or same state variable).
* Only **one can be selected** at a time.
* `checked={gender == "Male"}` → true if state matches `"Male"`.
* `onChange={(e) => setgender(e.target.value)}` → updates gender state when clicked.

✅ This ensures that your state always knows which option is chosen.

---

### (d) **Select Dropdown**

```jsx
<select
  value={city}
  onChange={(e) => setcity(e.target.value)}
>
  <option value="dheli">Dheli</option>
  <option value="pune">Pune</option>
  <option value="mumbai">Mumbai</option>
</select>
```

* `value={city}` → which option is currently selected (controlled by state).
* `onChange={(e) => setcity(e.target.value)}` → updates `city` when user chooses another option.

✅ Dropdown behaves like a text input but with predefined values.

---

## 5. **Todo State (Array of Objects)**

```jsx
const [todos, settodos] = useState([
  { id: 1, title: "Finish your work", isCompleted: false }
]);
```

* `todos` = array of task objects.
* Each object has:

  * `id` (unique identifier)
  * `title` (task name)
  * `isCompleted` (status true/false).

✅ This is how we structure data in React apps: using arrays of objects inside state.

Later, when you press “Create Todo”, you’ll add a new object to this array.

---

## 6. **Button Inside a Form**

```jsx
<button>Create todo</button>
```

* Inside `<form>`, a `<button>` by default submits the form.
* You’ll normally handle it with `onSubmit`.
* For now, it doesn’t add data but soon you’ll push new todo objects into the state.

---

## 7. **Putting It All Together**

* You now know how to handle **all common input types** in React:

  * Text → `value`
  * Checkbox → `checked`
  * Radio → `value + checked`
  * Dropdown → `value`
* And you know how to **connect them to state** with `useState`.

This is **the foundation of every form in React**. Whether it’s login, signup, or todo-app → it’s always controlled inputs.

---

# 🎯 Key Takeaways (Unforgettable Points)

1. **React needs state** (`useState`) to track values.
2. Every form element should be a **controlled component**.
3. Text inputs use `value`, checkboxes use `checked`.
4. Radio buttons → manage with state and `checked={state == value}`.
5. Dropdown (`select`) is controlled with `value` just like input.
6. `onChange` is the bridge → captures event data (`e.target.value` or `e.target.checked`).
7. Never rely on plain HTML form behavior (page reloads), always handle manually.
8. State changes → React re-renders → UI updates automatically.

---


## Created with ❤️ by Shivansh