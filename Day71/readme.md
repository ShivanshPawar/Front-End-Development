# 🦁 Sheryians Coding School Cohort – Day71 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)


# 1) what is react, and why use it?

**what:** react is a **javascript library** for building user interfaces. not a full framework — just the view layer. it lets you describe **what** the UI should look like for a given state, and it handles updating the browser efficiently.

**why it wins:**

* **component-based**: build features as small, reusable units.
* **declarative**: you describe the UI; react figures out DOM updates.
* **fast updates**: via virtual DOM + reconciliation + batching.
* **massive ecosystem**: any problem you hit, someone’s solved it.
* **portable mindset**: the “react way” works on web (react), native (react native), desktop (tauri/electron), etc.

**truth:** react gives you freedom. you can architect brilliantly or make a spaghetti monster. discipline is on you.

---

# 2) components & types (class vs function)

components = **reusable UI units**. they receive **props** (inputs) and can manage **state** (internal data).

## a) function components (modern default)

* simple functions that return JSX.
* state & lifecycle via **hooks** (e.g. `useState`, `useEffect`).

```jsx
import { useState } from "react";

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + step)}>
      {count}
    </button>
  );
}
export default Counter;
```

## b) class components (legacy/maintenance)

* ES6 classes, `this.state`, `this.setState`, lifecycle methods.

```jsx
import React from "react";

class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
```

**use today:** function components + hooks. know classes to read older code.

---

# 3) SPAs vs MPAs

**SPA (single page application):** app loads once; routing happens **client-side**; content updates without full page reloads.

* **pros:** snappy UX, fluid transitions, great for app-like experiences.
* **cons:** SEO needs SSR/prerender; initial bundle can be heavy.

**MPA (multi-page application):** each route is a **new server-rendered page**.

* **pros:** SEO-friendly by default; small per-page payloads.
* **cons:** full page reloads; more server complexity for rich interactivity.

**modern twist:** you often combine both via **SSR/SSG/ISR** (e.g., Next.js/Remix) → server renders HTML for SEO + hydration for interactivity.

---

# 4) real DOM vs virtual DOM

* **real DOM:** the actual browser tree. updating it a lot is slow.
* **virtual DOM (concept):** an in-memory representation of UI. react renders to this first, **diffs** it with the previous version, then applies the minimal changes to the real DOM.
* **react 18+ uses “fiber”** under the hood for prioritized & interruptible rendering (concurrent features). the “virtual DOM” explanation is still the right mental model.

**impact:** you write simple code; react does surgical updates.

---

# 5) NPM basics | installing packages

* **npm** comes with node. it manages dependencies.
* `package.json` tracks your project’s metadata, scripts, and deps.
* **commands you’ll actually use:**

  ```bash
  npm init -y                 # create package.json
  npm install <pkg>           # add dependency
  npm install -D <pkg>        # add dev dependency
  npm uninstall <pkg>         # remove
  npx <tool>                  # run a binary without global install
  npm run <script>            # run script defined in package.json
  ```
* **semver tips:** `^1.2.3` (allow minor+patch), `~1.2.3` (only patch), exact pins for reproducibility.
* alternatives: **yarn**, **pnpm** (faster & disk-efficient). pick one per project.

---

# 6) how updates work in react + ES6+ essentials

## update flow (react mental model)

1. **state/props change** → component **re-renders** (pure calculation of JSX).
2. react **diffs** the new tree vs previous (reconciliation).
3. minimal changes are **committed** to the DOM.
4. effects (`useEffect`) run **after commit**.

**key performance levers:**

* **keys** on lists for stable identity.
* **React.memo** to skip re-renders when props don’t change.
* **useMemo/useCallback** to stabilize expensive calculations/handlers.
* **split code** (lazy + Suspense) to keep initial load fast.
* **batching** (automatic in React 18) reduces unnecessary commits.

## ES6+ features you’ll use daily

```js
// imports/exports
import Thing, { helper } from "./Thing.js";
export default function Thing() {}
export const helper = () => {};

// destructuring
const { id, title } = props;

// spread/rest
const data = { ...prev, status: "done" };
function fn(a, ...rest) {}

// arrow functions
const inc = (n) => n + 1;

// template literals
const msg = `Hello, ${name}!`;
```

---

# 7) react vs angular vs vue (no-sugar-coat)

| aspect         | react                                      | angular                          | vue                                  |
| -------------- | ------------------------------------------ | -------------------------------- | ------------------------------------ |
| type           | **library** (bring your own tools)         | **batteries-included framework** | lightweight **framework**            |
| learning curve | medium                                     | steep                            | easy→medium                          |
| structure      | flexible (can get messy)                   | strict (enterprise vibes)        | balanced & pragmatic                 |
| tooling        | choose vite/next/remix/etc.                | angular CLI, RxJS, DI built-in   | vite-first, official router/store    |
| when to pick   | huge ecosystem, flexibility, SSR/SSG needs | big teams, standardized patterns | fast MVPs, gentle learning, great DX |

**reality:** react dominates job market + ecosystem. angular suits large enterprises. vue is dev-friendly and thrives in dashboards/SMBs.

---

# 8) basic terminal commands (you’ll actually type)

```bash
pwd      # where am i?
ls       # list files/folders
cd src   # go into a folder (cd .. to go back)
clear    # clean screen
```

extras you’ll use a lot:

```bash
mkdir components
touch src/App.jsx
rm -rf node_modules     # careful!
```

windows powershell: `ls` works; `del` to delete; `mkdir`, `cd` same.

---

# 9) setting up node.js

1. install **LTS** from nodejs.org (or use **nvm** / **nvm-windows** to manage versions).
2. verify:

   ```bash
   node -v
   npm -v
   ```
3. editor: **VS Code**, with **ESLint**, **Prettier**, **Error Lens**.

**tip:** use nvm to switch node versions per project like a pro.

---

# 10) install react with vite + react devtools

**why vite:** blazing dev server, smart HMR, modern build (esbuild + rollup).

```bash
# create app
npm create vite@latest my-app

# select: React / JavaScript (or TypeScript)
cd my-app
npm install
npm run dev   # http://localhost:5173
```

**react developer tools (chrome/firefox extension):**

* inspect component tree, props, state, hooks.
* profile renders, spot wasted re-renders.

---

# 11) JSX (javascript XML) — the rules that matter

**what:** HTML-ish syntax inside JS that compiles to `React.createElement(...)`.

```jsx
const name = "Shivi";
const el = <h1>Hello, {name.toUpperCase()}!</h1>;
```

**must-know rules:**

* one **parent** node returned (use **Fragments** to avoid extra divs):

  ```jsx
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
  ```
* attributes are **camelCase**: `className`, `onClick`, `htmlFor`.
* inline styles use **objects**:

  ```jsx
  <div style={{ backgroundColor: "black", padding: 12 }} />
  ```
* **component names are Capitalized**, DOM tags are lowercase:

  ```jsx
  function Card() { return <div /> }   // component
  <div />                              // DOM element
  ```
* lists need **key**:

  ```jsx
  items.map(item => <li key={item.id}>{item.label}</li>)
  ```
* conditional rendering patterns you’ll reuse:

  ```jsx
  {isLoading ? <Spinner/> : <List/>}
  {error && <ErrorBox/>}
  {list.length ? <List/> : <Empty/>}
  ```

---

# 12) creating components — best practices

* **single responsibility**: each component does one clear thing.
* **small & composable** over giant “god” components.
* **props in, events out** (unidirectional data flow).
* **controlled components** for forms (state is the source of truth).
* **co-locate** files: keep component + its styles/test next to each other.
* **naming:** `PascalCase` components, `camelCase` props.
* **don’t overuse context** — reach for it when prop-drilling hurts.
* **optimize thoughtfully:** add `React.memo` only after measuring.

**example structure:**

```
src/
  components/
    Button/
      Button.jsx
      Button.test.jsx
      Button.css
    Card/
      Card.jsx
  pages/
    Home.jsx
  App.jsx
  main.jsx
```

---

# 13) understand a react project (control-flow, bundlers, transpilers, folders, devtools)

## control-flow (the “react way”)

* **state lives where it’s needed** (closest common parent).
* **data flows down** via props.
* **events bubble up** via callbacks.
* **derived state** is computed, not duplicated (avoid `stateA` + `stateB` that must stay in sync).
* global state? consider **context**, **zustand**, **redux toolkit**, or **tanstack query** for server cache.

## bundlers/transpilers (what’s doing what)

* **vite**: dev server + build pipeline (esbuild for transform, rollup for production bundles).
* **webpack**: older standard (create-react-app used this).
* **babel**/**swc**: transpile modern JS/JSX to browser-compatible JS.

  * vite can use babel plugins if you need them.
* **typescript**: types for safety; vite supports it out of the box.

## folder structure (vite default, sensible)

```
my-app/
  index.html             # root HTML with mounting <div id="root">
  package.json
  vite.config.js
  /public                # static assets served as-is
  /src
    main.jsx             # entry: creates root & renders <App/>
    App.jsx              # root component
    /components          # your reusable pieces
    /pages               # route-level screens (if using a router)
    /assets              # images, fonts
```

## env & aliases

* vite env files: `.env`, `.env.development`, `.env.production`
* access via `import.meta.env.VITE_API_URL`
* path aliases in `vite.config.js` for `@/components`

## react devtools usage (what to actually click)

* **Components tab:** inspect props/state; check “why did this render”.
* **Profiler tab:** record interactions to spot expensive updates.

---

# practical add-ons you’ll inevitably touch

## routing

```bash
npm install react-router-dom
```

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([{ path: "/", element: <Home/> }]);
export default function App(){ return <RouterProvider router={router}/> }
```

## data fetching (server state)

* **fetch** + `useEffect`, or better: **@tanstack/react-query** for caching/retries/loading states.

## forms

* **react-hook-form** + **zod** for schema validation = painless forms.

## code splitting

```jsx
const Settings = React.lazy(() => import("./pages/Settings"));
<Suspense fallback={<Spinner/>}><Settings/></Suspense>
```

---

# common gotchas (read these twice)

* **missing keys** in lists = subtle re-render bugs.
* **state mutation** breaks updates:

  ```js
  // bad
  state.list.push(item);

  // good
  setList(prev => [...prev, item]);
  ```
* **effects** running too often: watch your dependency arrays.
* **prop drilling** hell: lift state carefully, or use context/store when needed.
* **premature optimization**: measure first (React Profiler), then tune.

---

# mini checklists

**start a new app (vite):**

```bash
npm create vite@latest my-app
# choose React
cd my-app
npm install
npm run dev
```

**add router + query + form (typical stack):**

```bash
npm i react-router-dom @tanstack/react-query react-hook-form zod
```

**project scripts (package.json):**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

---

# 🚀 React + Vite Boilerplate Explained

When you run:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

You get a project like this:

```
my-app/
│
├── node_modules/        # Installed dependencies (auto-generated)
├── public/              # Static files
│   └── vite.svg
├── src/                 # Your application code
│   ├── assets/          # Images, fonts, etc.
│   │   └── react.svg
│   ├── App.css          # Styles for App component
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point for React
│
├── .gitignore           # Git ignore rules
├── index.html           # Root HTML file
├── package.json         # Project config + dependencies
├── vite.config.js       # Vite configuration
├── package-lock.json    # Lockfile (ensures same versions for everyone)
```

---

## 📂 File-by-File Breakdown

### 1. `index.html`

This is the **single HTML file** React injects everything into.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div> <!-- React injects here -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

🔑 Key points:

* Only **one HTML file** (Single Page Application concept).
* React app mounts into `<div id="root"></div>`.
* `main.jsx` is the entry file.

---

### 2. `main.jsx`

This is the **entry point** of your React app.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a root element and render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

🔑 Key points:

* Imports `App` component.
* `ReactDOM.createRoot` injects the app inside `#root`.
* `React.StrictMode` helps find potential problems.

---

### 3. `App.jsx`

Your **main component** (like the homepage).

```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React + Vite 🚀</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </>
  )
}

export default App
```

🔑 Key points:

* A **function component** with state (`useState`).
* Renders JSX.
* Uses `App.css` for styles.

---

### 4. `App.css`

CSS file for `App.jsx` component.

```css
h1 {
  color: blue;
}
```

---

### 5. `index.css`

Global CSS file (applies everywhere).

```css
body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f5f5;
}
```

---

### 6. `vite.config.js`

Configuration for Vite.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

🔑 Key points:

* Enables **React fast refresh** (instant updates).
* You can add aliases, proxy APIs, etc.

---

### 7. `package.json`

Defines dependencies + scripts.

```json
{
  "name": "my-app",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",          // Start dev server
    "build": "vite build",  // Build for production
    "preview": "vite preview" // Preview production build
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.0.0"
  }
}
```

---

### 8. `public/`

* Place static files here (images, icons, robots.txt, etc).
* Anything in `public/` is **copied as-is** into the final build.

---

### 9. `.gitignore`

Tells Git what files to ignore (like `node_modules/`).

---

## ⚡ How It All Connects

1. Browser loads `index.html`.
2. `<script src="/src/main.jsx">` runs.
3. `main.jsx` mounts `<App />` into `#root`.
4. `App.jsx` renders components.
5. Styles are imported via CSS files.
6. Vite handles bundling, optimization, and hot reload.

---


### ✅ Things to Remember in React:

1. **“A function component will always return HTML”**
   ❌ Not exactly true. A React function component **returns JSX**, not plain HTML. JSX *looks like HTML* but is actually JavaScript under the hood.

2. **“We can not write anything after return”**
   ✅ Correct. Once `return` executes, the function exits. No code after it runs.

3. **“We can only return single data/entity/variable/value”**
   ✅ Correct. A function returns *one thing* only. But in React, that *one thing* can be:

   * A single element
   * A fragment (`<> ... </>`) wrapping multiple elements
   * An array of elements

   So, you *can return multiple elements* but they must be **wrapped inside one parent**.

4. **“There must be single return in a function and that must be the last statement”**
   ❌ Not strictly true. A function can have **multiple return statements**, but only one will run depending on conditions.
   Example:

   ```jsx
   function Greet({ isLoggedIn }) {
     if (!isLoggedIn) {
       return <h1>Please log in</h1>;
     }
     return <h1>Welcome back!</h1>;
   }
   ```

---

### 🔑 20 Most Important Small Things to Remember in React (beginner to intermediate level)

These are the kind of things that save you from headaches later:

1. **Components return JSX, not HTML.**
2. **Always wrap multiple elements inside one parent** (`div`, `<>...</>` fragment, or array).
3. **Props are read-only** → you cannot change props inside a child.
4. **State is managed inside a component** using `useState`.
5. **Never modify state directly** → always use the setter (`setState`).
6. **Components must start with a capital letter** (React treats lowercase as HTML tags).
7. **`class` in HTML becomes `className` in JSX.**
8. **`for` in HTML becomes `htmlFor` in JSX.**
9. **Inline styles use objects** → `style={{ color: "red", fontSize: "20px" }}`.
10. **Return must be a single expression** (JSX or value). No random statements inside it.
11. **Self-closing tags** → `<img />`, `<input />`, `<br />`.
12. **Keys are required for lists** → `map()` must return elements with `key`.
13. **Hooks (like `useState`, `useEffect`) only work inside function components.**
14. **Never call hooks inside loops, conditions, or nested functions.**
15. **JSX allows embedding JavaScript** using `{ }`.
16. **Fragments (`<> </>`) don’t create extra DOM nodes.**
17. **`export default` allows one main export per file.**
18. **Events in JSX use camelCase** → `onClick`, `onChange`.
19. **Synthetic events in React are not exactly the same as native DOM events.**
20. **React is declarative** → instead of manipulating DOM manually, you change state, and React updates UI.

---


## Created with ❤️ by Shivansh