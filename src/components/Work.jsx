import React from 'react';
import Banking from '../assets/projects/hoobank.png';
import Nike from '../assets/projects/nike.png';
import Nexcent from '../assets/projects/nexcent.png';
import Advice from '../assets/projects/advice.png';
import Finance from '../assets/projects/finance.png';
import CRUD from '../assets/projects/crud.png';

const Work = () => {
  return (
    <div name='work' className='w-full   text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Checkout some of me RECENT work</p>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2 gap-4'>



                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${Nexcent})`}}
                    className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto  content-div '>


                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 w-full hover:backdrop-blur-3xl flex flex-col justify-center items-center h-[100%] duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://dreamy-lily-5a3834.netlify.app/">
                                <button className='text-center rounded-l-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Danialezzat/Nextcent">
                                <button className='text-center rounded-r-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${Banking})`}}
                    className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto  content-div '>


                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 w-full hover:backdrop-blur-3xl flex flex-col justify-center items-center h-[100%] duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://tubular-pika-a9805b.netlify.app">
                                <button className='text-center rounded-l-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Danialezzat/Hoobank-mini-project">
                                <button className='text-center rounded-r-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${Advice})`}}
                    className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto  content-div '>


                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 w-full hover:backdrop-blur-3xl flex flex-col justify-center items-center h-[100%] duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://peaceful-fudge-743d80.netlify.app">
                                <button className='text-center rounded-l-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Danialezzat/advice">
                                <button className='text-center rounded-r-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${Finance})`}}
                    className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto  content-div '>


                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 w-full hover:backdrop-blur-3xl flex flex-col justify-center items-center h-[100%] duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://splendid-peony-d81ad6.netlify.app">
                                <button className='text-center rounded-l-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Danialezzat/finence">
                                <button className='text-center rounded-r-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${Nike})`}}
                    className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto  content-div '>


                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 w-full hover:backdrop-blur-3xl flex flex-col justify-center items-center h-[100%] duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://dazzling-melomakarona-560b63.netlify.app">
                                <button className='text-center rounded-l-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Danialezzat/nikeMiniProject">
                                <button className='text-center rounded-r-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${CRUD})`}}
                    className='shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto  content-div '>


                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 w-full hover:backdrop-blur-3xl flex flex-col justify-center items-center h-[100%] duration-500'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://dulcet-kheer-825472.netlify.app">
                                <button className='text-center rounded-l-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Danialezzat/CRUD-project">
                                <button className='text-center rounded-r-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                




            </div>
        </div>
    </div>
  )
}

export default Work