
'use client'

import React from 'react'
import ServerComponent from './serverCopmonent'

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <div >
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>

                <ServerComponent />
            </div>
        </>
    )
}

export default Counter

// use client das ist eineclient component und ich benutze in die server component