'use client';

import React, { useEffect } from 'react';

function ErrorAbout(error: Error) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h1>Server Error</h1>
            <p>{error.message}</p>
            <button onClick={() => { }}>Try again</button>
        </div >
    )
}

export default ErrorAbout