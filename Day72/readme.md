# 🦁 Sheryians Coding School Cohort – Day72 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)

# 1) “how to use datatype in react / which are used?”

react uses **normal JavaScript data types**. what matters is how they **render in JSX** and how you **type** them (PropTypes/TypeScript).

## a) how data types behave in JSX

* **string / number** → render as text

  ```jsx
  <div>{42} — {user.name}</div>
  ```
* **boolean / null / undefined** → **don’t render anything** (often used for conditionals)

  ```jsx
  {isAdmin && <Badge>Admin</Badge>}
  ```
* **array** → renders each item; usually map to elements (remember **key**)

  ```jsx
  <ul>{items.map(it => <li key={it.id}>{it.title}</li>)}</ul>
  ```
* **object** → cannot render directly; convert to string or drill into fields

  ```jsx
  // ❌ <div>{user}</div>
  <div>{user.name}</div>
  <pre>{JSON.stringify(user, null, 2)}</pre>
  ```
* **function** → not rendered; passed as callbacks (e.g., `onClick={fn}`)
* **symbol / bigint** → generally avoid rendering directly; convert to string/number

## b) typing your props/state (2 common ways)

* **PropTypes (JS projects)**: lightweight runtime checks

  ```jsx
  import PropTypes from "prop-types";
  function User({ name, age }) { /* … */ }
  User.propTypes = { name: PropTypes.string.isRequired, age: PropTypes.number };
  ```
* **TypeScript (recommended for real apps)**: compile-time safety

  ```tsx
  type UserProps = { name: string; age?: number };
  const User: React.FC<UserProps> = ({ name, age }) => { /* … */ };
  ```

---

# 2) “how to show JSON”

you’ve got options depending on purpose.

### a) quickly display raw JSON (debug view)

```jsx
function Debug({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### b) display a list from JSON

```jsx
const data = [{ id: 1, title: "A" }, { id: 2, title: "B" }];

<ul>
  {data.map(item => <li key={item.id}>{item.title}</li>)}
</ul>
```

### c) show nested JSON safely

```jsx
function UserCard({ user }) {
  const { name, address = {} } = user || {};
  return (
    <div>
      <h3>{name ?? "Unknown"}</h3>
      <p>{address?.city || "No city"}</p>
    </div>
  );
}
```

### d) fetch JSON from an API and render

```jsx
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        setPosts(json.slice(0, 5));
      } catch (e) { setErr(e.message); }
      finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <ul>
      {posts.map(p => <li key={p.id}><b>{p.title}</b></li>)}
    </ul>
  );
}
```

---

# 3) “why not use a normal variable? why use `useState`?”

short answer: **variables don’t trigger re-renders** and **reset every render**. `useState` **persists across renders** and **notifies React to update the UI**.

### example (what *doesn’t* work)

```jsx
function CounterBad() {
  let count = 0;                 // resets on every render
  return <button onClick={() => { count++; /* UI won't update */ }}>
    Count: {count}
  </button>;
}
```

* clicking increments the variable but **react doesn’t know**, so the UI stays the same.

### correct way (state)

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>
    Count: {count}
  </button>;
}
```

* `setCount` **schedules a re-render** with new state.

### when variables are fine

* **derived values** inside render: `const total = price * qty;`
* **non-UI values that shouldn’t re-render**: use **`useRef`** (e.g., a timer id, previous value holder)

```jsx
const timerId = useRef(null);    // persists, no re-render on change
```

---

# 4) `useState` hook — deep dive (with real tips)

## a) signature

```jsx
const [state, setState] = useState(initialState);
```

* `initialState` can be a value or a **lazy initializer function**:

  ```jsx
  const [expensive, setExpensive] = useState(() => expensiveCompute());
  ```

## b) updates replace the value (they don’t merge objects)

```jsx
// primitives: replace
setCount(5);

// objects/arrays: you must update immutably
setUser(prev => ({ ...prev, name: "Shivi" }))
setList(prev => prev.map(i => i.id === id ? { ...i, done: true } : i))
```

> remember: class `setState` does shallow merge; **hook `useState` replaces**.

## c) functional updates (avoid stale state)

use this form **whenever next state depends on previous**:

```jsx
setCount(prev => prev + 1);
setForm(prev => ({ ...prev, email }));
```

this prevents issues when multiple updates are **batched**.

## d) batching (react 18+)

react batches multiple `setState` calls in the same tick (events, timeouts, promises).

```jsx
setA(1);
setB(2);
// one re-render, not two
```

## e) “why my console.log shows old state?”

because state updates are **asynchronous**. don’t expect the next line to have the new value.

```jsx
setCount(c => c + 1);
// console.log(count) // still old in this tick
```

if you need to react to a change, use **`useEffect`**:

```jsx
useEffect(() => {
  // runs after commit when count changes
  console.log("count changed", count);
}, [count]);
```

## f) updating arrays/objects (common patterns)

```jsx
// add
setTodos(prev => [...prev, { id: crypto.randomUUID(), text, done: false }]);

// remove
setTodos(prev => prev.filter(t => t.id !== id));

// update one
setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
```

## g) avoid redundant/derived state

don’t store what you can compute:

```jsx
// ❌ storing both firstName, lastName, fullName
// ✅ store first & last; compute fullName
const fullName = `${firstName} ${lastName}`;
```

## h) when to use `useRef` instead of `useState`

* you need a value to **persist** across renders **without** causing re-renders (e.g., DOM node, interval id, previous value store).

```jsx
const prev = useRef(count);
useEffect(() => { prev.current = count; }, [count]);
```

## i) controlled inputs (the classic form pattern)

```jsx
function Form() {
  const [name, setName] = useState("");
  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="Your name"
    />
  );
}
```

## j) lazy init for expensive defaults

```jsx
const [list, setList] = useState(() => JSON.parse(localStorage.getItem("list") || "[]"));
```

## k) pitfalls to remember

* never mutate state in place (React may skip re-render if reference doesn’t change).
* don’t call hooks conditionally.
* big objects in state? consider splitting into multiple `useState` calls for targeted updates.

---

## quick mini reference (copy/paste gold)

**conditional returns (multiple `return`s are fine):**

```jsx
if (loading) return <Spinner/>;
if (error) return <Error msg={error}/>;
return <Content/>;
```

**rendering booleans:**

```jsx
{isOpen && <Modal/>}
```

**defensive rendering:**

```jsx
{data?.items?.length ? data.items.map(...) : <Empty/>}
```

**map with keys:**

```jsx
list.map(item => <Row key={item.id} item={item}/>)
```

---



## Created with ❤️ by Shivansh