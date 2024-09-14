import React from 'react'
import { FaReacteurope } from "react-icons/fa6";
function Navbar() {
    return (
        <div className='sticky 
            h-auto min-w-full
            flex
            justify-between
            bg-zinc-800
            text-slate-200
            gap-2 px-4 py-2
        '
        >
            <div className='flex gap-5 items-center'>
                <div>
                    <FaReacteurope className='h-9 w-10' />
                </div>
                <div>
                    <h1
                        className='text-blue-200 font-bold '
                    >The React Page !</h1>
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div>
                    <button>Menu</button>
                </div>
                <div>
                    <button>About</button>
                </div>
                <div>
                    <button>Contact Us</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar