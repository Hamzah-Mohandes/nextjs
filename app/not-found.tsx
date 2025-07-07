import React from 'react'

function notFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-600">404 - Not Found</h1>
            <p className="text-2xl text-red-600">The page you are looking for does not exist. Please check the URL and try again.</p>
        </div>
    )
}

export default notFound