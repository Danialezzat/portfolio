import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = ({isDarkMode}) => {
  return (
    <div name='home' className={`${isDarkMode ? 'bg-[#eaf6f6] text-black' : 'bg-[#0a192f]' } bg-[#0a192f] w-full h-screen`}>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full'>
            <p className='text-[#9896f1] font-bold text-xl'>Hi, my name is</p>'text-[#9896f1]'
            <h1 className='text-4xl sm:text-7xl font-bold text-[#9896f1]'>Danial Ezzatmadar</h1>
            <h2 className='text-4xl sm:texl-7xl font-bold text-[#8892b0]'>I'm a junior Frontend web Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>my about</p>

            <div>
                
                <button className={`${isDarkMode ? 'font-black' : 'text-white'}  group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9896f1] hover:border-[#9896f1]`}>
                <Link to="skills" smooth={true} duration={500}>
                view work
                </Link>
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight  className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home