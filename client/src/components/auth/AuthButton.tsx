import React from 'react'

const AuthButton = () => {
    return (
        <button
            className="
                px-5 py-2 bg-gray-100 shadow
                rounded-full  
                text-black font-medium 
                hover:bg-gray-400 hover:text-gray-800
                duration-500 cursor-pointer
            "
        >
            Get Started
        </button>
    )
}

export default AuthButton