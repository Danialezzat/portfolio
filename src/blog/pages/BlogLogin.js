import React from 'react';
import { auth, provider } from '../../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BlogLogin = ({ setIsAuth,isDarkMode }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/bloghome')
    })
  }
  return (
    <div className={`${isDarkMode ? 'bg-[#eaf6f6]' : 'bg-[#0a192f] text-gray-300' } w-full h-screen flex flex-col justify-center text-center `}>
      <p className='font-semibold'>sign in with google to continue</p>
      <button onClick={signInWithGoogle} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In with Google</button>
    </div>
  )
}

export default BlogLogin