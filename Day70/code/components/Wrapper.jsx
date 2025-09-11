// Day 81

// import React from 'react'

// const Wrapper = (props) => {
//     return props.children
// }

// export default Wrapper





import React from 'react'
import { createContext, useState } from 'react'

export const todocontext = createContext(null);

const Wrapper = (props) => {

    const [todos, settodos] = useState([
        { id: 1, title: "Finish your work", isCompleted: false }
    ]);


    return (
        <todocontext.Provider value={[todos, settodos]}>
            {props.children}
        </todocontext.Provider>
    )
}

export default Wrapper