import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import DayNight from './DayNight';



const Navbar = ({setIsDarkMode, isDarkMode}) => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav)


  return (
    <div className={`${isDarkMode ? 'bg-[#9896f1]' : 'bg-[#0a192f]' } fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300`}>
        <div >
            {/* day and night toggle */}
            <DayNight isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </div>

        {/* my menu */}
            <ul className={`${isDarkMode ? 'text-black font-bold' : 'font-bold'} hidden md:flex`}>
                <li>
                <Link to="home" smooth={true} duration={500}>
                    <button class="before:ease relative h-12 w-24 overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                        <span relative="relative z-10">Home</span>
                    </button>
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                <button class="before:ease relative h-12 w-24 overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                    <span relative="relative z-10">About</span>
                    </button>
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                <button class="before:ease relative h-12 w-24 overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                    <span relative="relative z-10">Skills</span>
                    </button>
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                <button class="before:ease relative h-12 w-24 overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                    <span relative="relative z-10">Work</span>
                    </button>
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                <button class="before:ease relative h-12 w-24 overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                    <span relative="relative z-10">Contact</span>
                    </button>
                </Link>
                </li>
            </ul>
            

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden  z-10 '>
            {!nav ? <FaBars className='text-black' /> : <FaTimes className='text-black' /> }
        </div>

        {/* Mobile Menu */}
        <ul className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} ${isDarkMode ? 'bg-[#9896f1]' : 'bg-[#0a192f]'  }`}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>


        {/* Social icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/daniel-ezzatmadar-554736197/" target='_blanck' className='flex justify-between items-center w-full text-gray-300 '>
                        LinkedIn <FaLinkedin  size={30}/>
                    </a>
                </li>
                <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a href="https://github.com/Danialezzat" target='_blanck' className='flex justify-between items-center w-full text-gray-300 '>
                        GitHub <FaGithub  size={30}/>
                    </a>
                </li>
                <li  className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href='mailto:the_timos@yahoo.com'className='flex justify-between items-center w-full text-gray-300 '>
                        Email <HiOutlineMail  size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar