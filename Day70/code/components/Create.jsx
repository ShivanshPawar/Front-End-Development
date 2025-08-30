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








//  Day76

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
        <>
            <h1>Create Tasks</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)} // gives you input value
                    value={title}
                    type="text"
                    placeholder="title" />
                <br /><br />
                <button>Create todo</button>
            </form>
        </>
    )
}

export default Create