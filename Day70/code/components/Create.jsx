import { useState } from "react";
import { nanoid } from "nanoid";


// const Create = (props) => {

//     console.log(props);

//     const [fullname, setfullname] = useState("");
//     const [age, setage] = useState("");

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const newuser = { fullname, age };
//         console.log(newuser)
//     }

//     return (
//         <div><h1>register user</h1>
//             <form onSubmit={submitHandler}>
//                 <input
//                     onChange={(e) => setfullname(e.target.value)}
//                     value={fullname}
//                     type="text"
//                     placeholder="full name" />


//                 <input
//                     onChange={(e) => setage(e.target.value)}
//                     value={age}
//                     type="number"
//                     placeholder="age" />
//                 <button>submit</button>
//             </form></div>
//     )
// }

// export default Create








//  Day 76 & 77

import React from 'react'

const Create = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false,
        }

        let copytodos = [...todos]
        copytodos.push(newtodo)
        settodos(copytodos); // these three lines
        // settodos([...todos,newtodo]) // efficint way to settodos

        settitle("")
    };

    return (
        <div className="w-[45%] h-[100%] border p-10 mx-auto">
            <h1 className="text-5xl font-thin mb-10">Set <span className="text-red-400">Reminders</span> for tasks</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    className="text-4xl font-extralight mb-6 "
                    onChange={(e) => settitle(e.target.value)} // gives you input value
                    value={title}
                    type="text"
                    placeholder="title" />
                <br /><br />
                <button className="text-xl px-5 py-2 border border-amber-50 rounded hover:cursor-pointer active:scale-95">Create todo</button>
            </form>
        </div>
    )
}

export default Create