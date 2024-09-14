import React from 'react'

function Item() {
    return (
        <div
            className='h-auto w-72 bg-zinc-500 
                   
                    rounded-lg '
        >
            <div
                className=' flex flex-col
                  items-center'
            >
                <img
                    className='h-32 min-w-full  rounded-top '
                    src="https://picsum.photos/300" alt="Random Image" />

            </div>

            <p
                className='text-sm p-2 '
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio porro dicta deleniti nisi iusto odit

            </p>
            <div
                className='flex justify-evenly pt-4 pb-4 pl-4 pr-4 gap-2'
            >
                <button class="text-base  bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded 
                shadow
                w-36
                ">
                    View
                </button>
                <button class="text-base bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded 
                 w-32
                shadow">
                    Buy
                </button>
            </div>


        </div>
    )
}

export default Item