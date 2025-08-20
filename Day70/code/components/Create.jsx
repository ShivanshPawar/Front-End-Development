import { useState } from "react";

const Create = (props) => {

    console.log(props);
    
    const [fullname, setfullname] = useState("");
    const [age, setage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newuser = { fullname, age };
        console.log(newuser)
    }

    return (
        <div><h1>register user</h1>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => setfullname(e.target.value)}
                    value={fullname}
                    type="text"
                    placeholder="full name" />


                <input
                    onChange={(e) => setage(e.target.value)}
                    value={age}
                    type="number"
                    placeholder="age" />
                <button>submit</button>
            </form></div>
    )
}

export default Create