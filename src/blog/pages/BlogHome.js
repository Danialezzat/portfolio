import React from 'react';
import { Outlet,Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config';

const BlogHome = ({isAuth, setIsAuth}) => {

  let navigate = useNavigate()


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/bloghome/bloglogin')

    })
  }

  return (
    <div>
      <nav className='border border-black p-4'>
        <Link to='/bloghome' >Home</Link>
        <Link to='/bloghome/createpost' >Create Post</Link>
        {!isAuth ? <Link to='/bloghome/bloglogin' >Login</Link> : <button onClick={signUserOut}>Log Out</button>}
        <Link to='/portfolio' >Portfolio</Link>
      </nav>
      <h1>
        BlogHome  
      </h1>

      <Outlet />
      
    </div>
  )
}

export default BlogHome