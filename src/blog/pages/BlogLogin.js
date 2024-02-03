import React from 'react';
import { auth, provider } from '../../firebase-config';
import {signInWithPopup} from 'firebase/auth'

const BlogLogin = ({ setIsAuth }) => {

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
    })
  }
  return (
    <div>
      <p>sign in with google to continue</p>
      <button onClick={signInWithGoogle} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In with Google</button>
    </div>
  )
}

export default BlogLogin