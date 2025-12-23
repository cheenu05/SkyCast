import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="w-full  flex justify-between items-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-900">

                <div>
                    <h1 className="text-white font-semibold font-serif text-5xl">SkyCast</h1>
                    <p className='text-white text-sm '>Your Weather Companion</p>
                </div>

               <h2 className="text-white font-medium font-serif text-xl cursor-pointer hover:underline hover:text-2xl hover:animate-bounce">About</h2>


            </div>
        </>
    )
}

export default Navbar
