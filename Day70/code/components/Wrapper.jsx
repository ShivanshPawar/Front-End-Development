// Day 81

// import React from 'react'

// const Wrapper = (props) => {
//     return props.children
// }

// export default Wrapper





import React from 'react'
import { createContext } from 'react'

export const todocontext = createContext(null);

const Wrapper = (props) => {
    return (
        <todocontext.Provider value={"hello from HOC context"}>
            {props.children}
        </todocontext.Provider>
    )
}

export default Wrapper