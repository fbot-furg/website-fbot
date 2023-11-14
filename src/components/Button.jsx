import React from 'react'

export default function Button({}) {
    const showMoreImages = () => {
        console.log("button clicked")
        setVisible(visible() + 10);
    };

    return (
        <>
        <button onClick={showMoreImages} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Show More
        </button>
        </>
    )
    }