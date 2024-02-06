import { Outlet,Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config';
import Button from './Button';

const BlogHome = ({isAuth, setIsAuth, isDarkMode}) => {
  

  let navigate = useNavigate()


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/bloghome/bloglogin')

    })
  }

  return (
    <>
      <div className={`${isDarkMode ? 'bg-[#eaf6f6] text-black' : 'bg-[#0a192f]' } bg-[#0a192f] w-full h-screen`}>
        <nav className='py-10'>
          <Link to='/bloghome' >Home</Link>
          {!isAuth ? <Link to='/bloghome/bloglogin' >Login</Link> : (
            <>
              <Link to='/bloghome/createpost' >Create Post</Link>
              <Button signUserOut={signUserOut}/>
            </>
            )
            }
          <Link to='/' >Portfolio</Link>
        </nav>

        
        <Outlet />
      </div>
      
    </>
  )
}

export default BlogHome