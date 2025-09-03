# 🦁 Sheryians Coding School Cohort – Day82 Learnings

## 🧑‍💻 Code : [Class-Code](../Day70/code/src/App.jsx)

## 🚦 React Router (Routers in React)

Routing is one of the most **essential parts of modern web apps**. Since React is a **Single Page Application (SPA)** framework, we don’t actually load a new page from the server when you click links — instead, React **switches components dynamically** while keeping you on the same HTML page.

That’s why we use **React Router**, the official library for handling navigation in React apps.

---

## 📌 What is React Router?

* A **routing library** for React.
* Helps us create **multiple views/pages** inside a SPA.
* Instead of loading a new HTML file, it dynamically renders **different components** when the URL changes.

👉 Example:

* `/` → Home Page
* `/about` → About Page
* `/contact` → Contact Page

All of this is handled by React Router **without refreshing the page**.

---

## 🛠️ Installing React Router

```bash
npm install react-router-dom
```

* `react-router-dom` is the package used for web apps (there’s `react-router-native` for React Native).

---

## ⚡ Core Concepts in React Router

### 1. **BrowserRouter**

* Wraps your whole app to enable routing.
* Uses HTML5 history API (pushState, popState) to keep UI in sync with the URL.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 2. **Routes & Route**

* Defines different routes and which component should load.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

👉 Here:

* `/` → Home Component
* `/about` → About Component
* `/contact` → Contact Component

---

### 3. **Link & NavLink**

* Instead of `<a href="">`, we use `<Link>` to prevent page reload.

```jsx
import { Link, NavLink } from "react-router-dom";

<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>

  {/* NavLink adds active styling */}
  <NavLink to="/about" className={({isActive}) => isActive ? "text-red-500" : ""}>About</NavLink>
</nav>
```

💡 `NavLink` is like `Link` but adds **active styles** automatically when you are on that page.

---

### 4. **useNavigate (Programmatic Navigation)**

If you want to **redirect the user after an action**:

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // after login success
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

### 5. **useParams (Dynamic Routing)**

If your route has variables (`/user/:id`), you can extract them:

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h1>Profile of user {id}</h1>;
}
```

Route definition:

```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

👉 Visiting `/user/101` will render → "Profile of user 101".

---

### 6. **Nested Routes**

You can define child routes inside a parent:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Now:

* `/dashboard/profile` → Profile
* `/dashboard/settings` → Settings

Inside `Dashboard.jsx`, you must use `<Outlet />` to show nested routes:

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* renders Profile or Settings */}
    </div>
  );
}
```

---

### 7. **useLocation**

* Gives current URL/location object. Useful for tracking user’s current path.

```jsx
import { useLocation } from "react-router-dom";

function CurrentPage() {
  const location = useLocation();
  return <h2>Current Path: {location.pathname}</h2>;
}
```

---

### 8. **Navigate Component (Redirects)**

Instead of `useNavigate`, you can use `<Navigate>` for conditional redirects.

```jsx
<Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
```

---

### 9. **Protected Routes**

Example: Only logged-in users can see dashboard.

```jsx
function PrivateRoute({ children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

<Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
```

---

### 10. **404 Page (Catch-all Route)**

```jsx
<Route path="*" element={<h1>404 Page Not Found</h1>} />
```

---

## 🎨 Styling with Router

* `NavLink` can apply active styles.
* You can also use Tailwind, CSS Modules, or UI libraries like `react-router-bootstrap` for Navbar styling.

---

## 🔥 Extra Topics (Advanced React Router)

1. **Data Router (v6.4+)** – `createBrowserRouter`, `loader`, `action` → useful for data fetching.
2. **Lazy Loading Routes** – Code-splitting with `React.lazy` + `Suspense`.
3. **Scroll Restoration** – reset scroll position on navigation.
4. **URL Query Parameters** – use `useSearchParams` hook.

---

# 📝 Recap (Unforgettable Notes)

* React Router makes **SPA feel like MPA**.
* Use `<BrowserRouter>` as the wrapper.
* Define routes inside `<Routes><Route/></Routes>`.
* Use `<Link>` instead of `<a>` to prevent reload.
* Use `NavLink` for active styling.
* Use `useNavigate` for redirects.
* Use `useParams` for dynamic routes.
* Use `Outlet` for nested routes.
* Use `Navigate` for protected routes & redirects.
* Always handle 404 with `*` route.

---

## Created with ❤️ by Shivansh