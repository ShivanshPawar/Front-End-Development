import { useState } from "react";
import Create from "../components/Create";
import Read from "../components/Read";

// Day 71


// const App = () => {

//   const handleclick = () => {
//     alert("Button Clicked")
//   }

//   const handleparamclick = (e) => {
//     alert(e)
//   }



//   return (
//     <div>
//       <h1>Welcome to React </h1>
//       <button onClick={handleclick}>Click me</button>
//       <button onClick={() => {handleparamclick("hello")}}>Click me</button>
//     </div>
//   )
// }

// export default App






// Day 72 


// const App = () => {
//   let n = 12; // number
//   let s = "strange" // string
//   let b = false; // boolean
//   let nu = null; // boolean
//   let un = undefined; // boolean
//   let arr = [<h1>hey</h1>, 11, "you", true, null, undefined] // array
//   let obj = {
//     name: "john",
//     age: 70
//   }

//   return (
//     <div>
//       <h1>Datatypes</h1>
//       <h2>number: {n}</h2>
//       <h2>strings: {s}</h2>
//       <h2>boolean: {b}</h2>
//       <h2>null: {nu}</h2>
//       <h2>undefined: {un}</h2>
//       <h2>array: {arr}</h2>
//       <h2>object: {obj.name}||{obj.age}</h2>
//     </div>
//   )
// }

// export default App





// const App = () => {

//   const profiles = [
//     {name: "john" , age: 45},
//     {name: "johny" , age: 54},
//     {name: "johnson" , age: 25},
//     {name: "jimmy" , age: 35},
//     {name: "jammy" , age: 40}
//   ];

//   const updatedProfiles = profiles.map((profiles,index) => {
//     return(
//       <li key={index}>
//         <span>Name: {profiles.name}</span>
//         <br />
//         <span>Age: {profiles.age}</span>
//       </li>
//     )
//   })

//   return (
//     <div>
//       <h1>Json Rendering</h1>
//       <ul>{updatedProfiles}</ul>
//     </div>
//   )
// }

// export default App





// const App = () => {

//   const [username, setUsername] = useState("shivansh");

//   const ChangeHandler = () => {
//       setUsername("Shivi");
//     };
//     console.log(username);

//   return (
//     <div>
//       <h1>Username</h1>
//       <h2>{username}</h2>
//       <button onClick={ChangeHandler}>Change</button>
//     </div>
//   )
// }

// export default App





// Day 75


const App = () => {
  const [users, setuser] = useState([
    { name: "john", age: 45 },
    { name: "shery", age: 15 },
    { name: "emy", age: 25 },

  ])

  return (
    <div>
      <Create />
      <Read users={users} setuser={setuser} />
    </div>
  )
}

export default App