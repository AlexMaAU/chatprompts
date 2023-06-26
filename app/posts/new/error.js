// if page loaded incorrectly, use error.js to handle error

'use client'
const { useEffect } = require("react")

  // Error components must be client components

const Error = () => {
    useEffect(()=>{
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            {/* attempt to recover by trying to re-render the segment */}
            <button onClick={()=>reset()}>Try Again</button>
        </div>
    )
}

export default Error