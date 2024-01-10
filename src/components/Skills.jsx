import React from 'react';

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import TailwindCSS from '../assets/tailwind.png'


const Skills = ({isDarkMode}) => {
  return (
    <div name='skills' className={`${isDarkMode ? 'bg-[#eaf6f6] text-black' : 'bg-[#0a192f]' } w-full text-gray-300`}>

        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
            <div >
                <p className={`${isDarkMode ? 'text-[#9896f1]' : '' } text-4xl font-bold inline border-b-4 border-pink-600`}>Skills</p>
                <p className={`${isDarkMode ? 'text-black' : ''} py-4`}> These are the technologies I have worked with</p>
            </div>


            <div className='w-full grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8'>
                <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2`}>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className={`${isDarkMode ? 'text-black' : ''} py-4 font-semibold`}>HTML</p>
                </div>

                <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2`}>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className={`${isDarkMode ? 'text-black' : ''} py-4 font-semibold`}>CSS</p>
                </div>

                <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2`}>
                    <img className='w-20 mx-auto' src={JavaScript} alt="javascript icon" />
                    <p className={`${isDarkMode ? 'text-black' : ''} py-4 font-semibold`}>JavaScript</p>
                </div>

                <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2`}>
                    <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                    <p className={`${isDarkMode ? 'text-black' : ''} py-4 font-semibold`}>React</p>
                </div>

                <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2`}>
                    <img className='w-20 mx-auto' src={TailwindCSS} alt="tailwind icon" />
                    <p className={`${isDarkMode ? 'text-black' : ''} py-4 font-semibold`}>TailwindCSS</p>
                </div>

                <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2`}>
                    <img className='w-20 mx-auto' src={GitHub} alt="github icon" />
                    <p className={`${isDarkMode ? 'text-black' : ''} py-4 font-semibold`}>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;