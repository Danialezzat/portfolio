import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const BlogHome = () => {
  return (
    <div>
      <nav>
        <Link to='/bloghome' >Home</Link>
        <Link to='/bloghome/createpost' >Create Post</Link>
        <Link to='/bloghome/bliglogin' >Login</Link>
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