import { Outlet,Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config';
import Button from './Button';

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
    <>
      <div>
        <nav className='border border-black p-4'>
          <Link to='/bloghome' >Home</Link>
          {!isAuth ? <Link to='/bloghome/bloglogin' >Login</Link> : (
            <>
              <Link to='/bloghome/createpost' >Create Post</Link>
              <Button signUserOut={signUserOut}/>
            </>
            )
            }
          <Link to='/portfolio' >Portfolio</Link>
        </nav>

        <Outlet />
        
      </div>
      
    </>
  )
}

export default BlogHome