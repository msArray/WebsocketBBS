import React from "react";

export default function Portal() {
    return (
        <div className='h-screen grid grid-rows-5 justify-center items-center'>
            <img src='/logo512.svg' alt='logo' className='row-span-2' />
            <div className='row-span-3 w-full flex justify-center items-center'>
                <input type='text' className='h-10 w-full max-w-96 p-4 text-white bg-slate-600 outline-0 rounded-s-full' />
                <input type='submit' className='h-10 w-20 text-white bg-slate-500 hover:bg-slate-400 rounded-e-full duration-200' value='search' />
            </div>
        </div>
    )
}