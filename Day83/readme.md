# 🦁 Sheryians Coding School Cohort – Day83 Learnings

## 🧑‍💻 Code : [Class-Code](../Day83/code/src/App.jsx)


# 📘 Detailed Notes – Recipe App (React + Context API + Router + RHF)


## 🔹 1. Project Structure Overview

This app is a **CRUD-style recipe app** where:

* Context API is used for **global state management**.
* React Router is used for **multi-page navigation**.
* React Hook Form is used for **form handling**.
* Toastify is set up for **notifications** (not fully integrated yet).

**Files & Responsibility**:

* `main.jsx` → Entry point, wraps everything with Providers.
* `App.jsx` → Main layout wrapper.
* `Mainroutes.jsx` → Defines app routes.
* `NavBar.jsx` → Navigation links.
* `RecipeContext.jsx` → Context Provider for recipe data.
* `Recipes.jsx` → Displays list of recipes.
* `Create.jsx` → Form to add new recipes.

---

## 🔹 2. Entry Point – `main.jsx`

```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import RecipeContext from './context/RecipeContext.jsx';

createRoot(document.getElementById('root')).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeContext>
)
```

### ✨ Explanation:

* **`createRoot`**: Mounts React app into HTML (`#root` div).
* **`RecipeContext`**: Wraps the app, providing global recipe state.
* **`BrowserRouter`**: Enables URL-based routing.
* **`ToastContainer`**: Required by `react-toastify` to show toast notifications.

👉 *This setup ensures routing, global state, and notifications are available everywhere.*

---

## 🔹 3. Layout – `App.jsx`

```jsx
import React from 'react'
import Mainroutes from './routes/Mainroutes'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='py-5 px-10 bg-black h-screen w-screen text-white font-thin'>
      <NavBar/>
      <Mainroutes/>
    </div>
  )
}

export default App
```

### ✨ Explanation:

* Provides **UI container** with Tailwind CSS:

  * `h-screen w-screen` → Full screen.
  * `bg-black text-white` → Theme.
* Includes **Navbar (always visible)**.
* Loads all **routes (Mainroutes)**.

👉 *Acts as the skeleton layout for the app.*

---

## 🔹 4. Routing – `Mainroutes.jsx`

```jsx
import {Route, Routes } from 'react-router';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Home from '../pages/Home';
import Create from '../pages/Create';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />
    </Routes>
  )
}
```

### ✨ Explanation:

* Defines **4 routes**:

  * `/` → Home page
  * `/recipes` → Recipes list
  * `/about` → About page
  * `/create` → Create recipe form
* Uses **React Router v6 syntax** (`element={<Component/>}`).

👉 *Enables SPA navigation without reloading.*

---

## 🔹 5. Navigation – `NavBar.jsx`

```jsx
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className='flex justify-center gap-x-10 text-sm mb-10'>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/create">Create Recipe</NavLink>
    </div>
  )
}
```

### ✨ Explanation:

* **`NavLink`** → special link that detects active route.
* If active, adds `"text-red-500"` (highlight in red).
* Layout:

  * `flex justify-center gap-x-10` → horizontal spacing.
  * `mb-10` → margin bottom.

👉 *User can easily navigate between pages, with active page highlighted.*

---

## 🔹 6. Global State – `RecipeContext.jsx`

```jsx
import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [data, setdata] = useState([]);
    console.log(data)

    return (
        <recipecontext.Provider value={{data, setdata}}>
            {props.children}
        </recipecontext.Provider>
    )
}
```

### ✨ Explanation:

* Creates **context** `recipecontext`.
* `data` → stores array of recipes.
* `setdata` → updates the recipe list.
* Wraps children inside `Provider` → all components can use `data` & `setdata`.

👉 *Avoids prop drilling, state is global.*

---

## 🔹 7. Display Recipes – `Recipes.jsx`

```jsx
import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';

const Recipes = () => {
  const {data} = useContext(recipecontext)

  const renderrecipe = data.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ))

  return <div>{renderrecipe}</div>
}
```

### ✨ Explanation:

* `useContext(recipecontext)` → access `data`.
* Maps over recipes and displays titles.
* Uses `key={recipe.id}` for React list optimization.

👉 *Whenever new recipes are added, they appear here instantly.*

---

## 🔹 8. Create Recipe – `Create.jsx`

```jsx
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { nanoid } from 'nanoid';

const Create = () => {
    const { data, setdata } = useContext(recipecontext)
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe])
        reset();
    }

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input {...register("image")} type="url" placeholder='Enter img url'/>
            <input {...register("title")} type="text" placeholder='Recipe Title'/>
            <textarea {...register("description")} placeholder='Description'></textarea>
            <textarea {...register("ingredients")} placeholder='Ingredients'></textarea>
            <textarea {...register("instructions")} placeholder='Instructions'></textarea>

            <select {...register("Categories")}>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
            </select>

            <button>Save Recipe</button>
        </form>
    )
}
```

### ✨ Explanation:

* **React Hook Form**:

  * `register` → binds inputs.
  * `handleSubmit` → wraps submit function.
  * `reset` → clears form.
* **`nanoid()`** → generates unique ID.
* `setdata([...data, recipe])` → immutably adds recipe.

👉 *When user submits form, new recipe is added to global context and instantly reflected in Recipes page.*

---

## 🔹 9. Data Flow (Important!)

1. User fills **Create Form** → submits.
2. `SubmitHandler` adds recipe (with unique ID) to context state.
3. Context updates → all subscribed components (like `Recipes`) re-render automatically.
4. Recipes page displays new recipe title.

---


## Created with ❤️ by Shivansh