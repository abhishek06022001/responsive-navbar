import React from 'react'
import Item from './Item';

function Grid() {
    const items = [];
    for (let i = 0; i < 9; i++) {
        items.push(<Item />);
    }
    return (
        <div
            className='  bg-zinc-700 h-full   text-gray-300 font-light text-2xl  
            p-4
            '
        >
            <h1 className='text-center'>Hey everyone This is my first tailwind page  </h1>
            <div className='grid
                grid-cols-3
                gap-12
                  mt-4
            '>
                {items.map(element => {

                    return <div className='flex  justify-center'>
                        {element}
                    </div>;

                })}
            </div>
        </div>
    )
}

export default Grid