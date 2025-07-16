import React from 'react'

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-24 py-6">
            <div className="font-bold text-xl tracking-tight text-white">VibeThree</div>
            <button className="
                px-5 py-2 bg-gray-100 shadow
                rounded-full  
                text-black font-medium 
                hover:bg-gray-400 hover:text-gray-800
                duration-500
            ">
                Get Started
            </button>
        </nav>
    )
}

export default Navbar