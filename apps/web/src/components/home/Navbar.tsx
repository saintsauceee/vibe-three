import React from 'react'
import AuthButton from '../auth/AuthButton'

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-24 py-6">
            <div className="
                font-bold text-xl tracking-tight text-white
            ">
                VibeThree
            </div>
            <AuthButton />
        </nav>
    )
}

export default Navbar