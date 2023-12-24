import React from "react"

export default function Nav() {
    return (
        <>
            <div className='h-full col-span-1 flex'>
                <div className='w-full m-2 p-2 bg-slate-600 flex justify-center rounded-full'>
                    <a href='/'>
                        <span className='h-14 w-14 bg-slate-500 flex justify-center items-center rounded-full'>
                            <img src='/home.svg' alt='home' className='h-8 w-8' />
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}