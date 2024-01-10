import React from 'react';
import GitHub from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'


const Contact = ({isDarkMode}) => {
  return (
    <div name='contact' className={`${isDarkMode ? 'bg-[#eaf6f6] text-black-600' : 'text-white' } w-full bg-[#0a192f] flex justify-center items-center flex-col p-4`}>
        <form method='POST' action="https://getform.io/f/dabafa22-8310-4e87-a6fe-cf1b0cef4fc1" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 '>
                <p className={`${isDarkMode ? 'text-[#9896f1]' : '' } text-4xl font-bold inline border-b-4 border-pink-600`}>Contact</p>
                <p className={`${isDarkMode ? 'text-black' : 'text-gray-300'}  py-4`}>Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]'  type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" id=""  rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex justify-center items-center'>Let's Collaborate</button>
        </form>

          <div className='w-full  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center py-8'>
                  

                  <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} py-4 shadow-md shadow-[#040c16] hover:scale-90 duration-500`}>
                      <img className='w-8 mx-auto' src={GitHub} alt="github icon" />
                        <a className={`${isDarkMode ? 'text-black' : 'text-white'} py-4`} href="https://github.com/Danialezzat?tab=repositories" target='_blanck'>GitHub</a>
                  </div>
                  <div className={`${isDarkMode ? 'bg-[#9896f1]' : ''} py-4 shadow-md shadow-[#040c16] hover:scale-90 duration-500`}>
                      <img className='w-8 mx-auto' src={LinkedIn} alt="github icon" />
                        <a className={`${isDarkMode ? 'text-black' : 'text-white'} py-4`} href="https://www.linkedin.com/in/daniel-ezzatmadar-554736197" target='_blanck'>LinkedIn</a>
                  </div>
          </div>

    </div>


  )
}

export default Contact