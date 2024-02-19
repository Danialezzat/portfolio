import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })




  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center '>
        <form  className=' flex flex-col justify-start items-center h-[550px] bg-white w-[400px] rounded-lg shadow-2xl relative'>
            <img className='rounded-[50%] h-[100px] w-[100px] border border-white=800 absolute top-[-50px]' src="../../../images/profile.png" alt="profilepic" />
            <h1 className='text-4xl font-bold font-sans mt-[55px] p-4 w-[90%] text-center border-b-2'>Sign Up</h1>

            <input name='email' value={formData.email} className='w-[90%] h-[60px] border rounded-lg mt-6 p-2 outline-none' type="email" placeholder='Email...'/>
            <input name='password' value={formData.password} className='w-[90%] h-[60px] border rounded-lg mt-6 p-2 outline-none' type="password" placeholder='Password...'/>
            <input className='w-[90%] h-[60px] border rounded-lg mt-6 p-2 outline-none' type="password" placeholder='Password...'/>
            <button className={`${true
                ? "w-[90%] h-[50px]  font-bold text-white text-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center  mb-2"
                : " bg-slate-300 w-[90%] h-[50px] mt-4 font-bold text-white text-xl  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  rounded-lg  px-5 py-2.5 text-center  mb-2"
            } mt-6 mx-auto`} type='submit'>Sign Up</button>
            <div className='flex justify- w-full p-6'>
                <p>You already have an account: <Link className='text-[#7a69a1]' to="/bloghome/bloglogin">login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Signup