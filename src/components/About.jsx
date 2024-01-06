import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid  grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className=' sm:text-right text-4xl font-bold '>
                        <p>Hi, I'am Daniel and nice to meet you please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I was born in a cold day of 1996,
                            I use to be a Radiology technician and I served in a hospital during the pandamic of COVID-19 .
                            as I always been intrested in coding and in technology I do always wanted to change my subject to computer science and guess what !?
                            in last months of 2022 I started stuyding about FrontEnd Web development and chnaged my subject to DATA SCIENCE of Verona , Italy in late 2023.
                            I have always been learning and I say life is just about learning every single minutes and seconds.
                            so I will do keep learning.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About