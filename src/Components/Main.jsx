import React from 'react'

const Main = () => {
    return (
        <>
        <hr className='text-white ' />
            <div className="main-container w-full h-screen bg-gray-800 flex  justify-center  ">

                

                {/* Left Box Start */}

                <div className="LeftBox  bg-gray-900 mt-20 p-8 h-100 w-100 rounded-l-4xl border-r-2 border-gray-400 hover:scale-105 duration-300 hover:cursor-pointer hover:border-gray-400 hover:rounded-3xl flex flex-col justify-between ">

                    <div>
                        <h2 className='text-black text-4xl font-serif'> Tuesday </h2>
                        <h3 className='text-black font-sans'> 24 Dec 2025 </h3>
                        <h3 className='text-black font-serif'> Location </h3>
                    </div>

                    <div>
                        {/* wih the help of alt+k degree sign visible ˚ */}

                        <h1 className='text-white font-serif'>Icon</h1>
                        <h1 className='text-white font-sans text-2xl'>29 ˚C</h1>
                        <h3 className='text-white font-serif text-lg'>Sunny</h3>
                    </div>


                </div>


                {/* right box start */}

                <div className="RightBox bg-gray-900 mt-20 p-4 h-100 w-100 rounded-r-4xl hover:scale-105 duration-300  hover:border-l-2 hover:border-gray-400 hover:rounded-3xl">

                    {/* box1 start */}

                    <div className='Box1 mt-2 hover:cursor-pointer'>

                        <div className='Box1-1 flex justify-between'>

                            < h2 className='text-white text-xl font-serif pl-3  mb-1 hover:underline' > Humidity </h2 >
                            < h3 className='text-white text-lg font-sans pr-3' > 78% </h3 >

                        </div>

                        <div className='Box1-2 flex justify-between'>

                            < h2 className='text-white text-xl font-serif pl-3  mb-1 hover:underline' > Air Quality </h2 >
                            < h3 className='text-white text-lg font-sans pr-3' > 78 </h3 >

                        </div>

                        <div className='Box1-3 flex justify-between'>

                            < h2 className='text-white text-xl font-serif pl-3  mb-1 hover:underline' > Wind </h2 >
                            < h3 className='text-white text-lg font-sans pr-3' > 3 Km/h </h3 >

                        </div>
                        <div className='Box1-4 flex justify-between'>

                            < h2 className='text-white text-xl font-serif pl-3  mb-1 hover:underline' > Sun-Rise </h2 >
                            < h3 className='text-white text-lg font-sans pr-3' > 7:18 am </h3 >

                        </div>
                        <div className='Box1-5 flex justify-between'>

                            < h2 className='text-white text-xl font-serif pl-3  mb-1 hover:underline' > Sun-Set </h2 >
                            < h3 className='text-white text-lg font-sans pr-3' > 5:29 pm  </h3 >

                        </div>


                    </div>

                    {/* box2 start */}

                    <div className='Box2 text-white bg-gray-800 h-28 mt-7 flex gap-4 rounded-lg hover:cursor-pointer'>

                        <div className='Box2-1 p-2 justify-center text-center hover:scale-110 duration-300 hover:bg-white hover:text-black hover:rounded-2xl'>
                            <ul>
                                <li>iconicon</li>
                                <li>day</li>
                                <li>temp</li>
                            </ul>
                            

                        </div>

                        <div className='Box2-2  p-2 justify-center text-center hover:scale-110 duration-300 hover:bg-white hover:text-black hover:rounded-2xl'>

                            <ul>
                                <li>iconicon</li>
                                <li>day</li>
                                <li>temp</li>
                            </ul>

                        </div>

                        <div className='Box2-3  p-2 justify-center text-center hover:scale-110 duration-300 hover:bg-white hover:text-black hover:rounded-2xl'>

                            <ul>
                                <li>iconicon</li>
                                <li>day</li>
                                <li>temp</li>
                            </ul>

                        </div>

                        <div className='Box2-4  p-2 justify-center text-center hover:scale-110 duration-300 hover:bg-white hover:text-black hover:rounded-2xl'>

                            <ul>
                                <li>iconicon</li>
                                <li>day</li>
                                <li>temp</li>
                            </ul>

                        </div>

                    </div>

                    <div className='Box3'>

                        <input

                            type="search"
                            name=""
                            id=""
                            placeholder='Change Location'
                            className='mt-7 p-2 w-full rounded-lg text-white'
                        />


                    </div>


                </div>

            </div>
        </>
    )
}

export default Main

