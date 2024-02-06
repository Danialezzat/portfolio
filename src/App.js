import { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import BlogHome from './blog/pages/BlogHome';
import CreatePost from './blog/pages/CreatePost';
import BlogLogin from './blog/pages/BlogLogin';
import Secssions from "./components/Secssions";
import BlogPosts from "./blog/pages/BlogPosts";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  return (
    <Router>
        <Routes>
            <Route path='/bloghome' element={<BlogHome isAuth={isAuth} setIsAuth={setIsAuth} />} >
              <Route index element={<BlogPosts isAuth={isAuth} setIsAuth={setIsAuth} />} />
              <Route path='/bloghome/createpost' element={<CreatePost isAuth={isAuth} />} />
              <Route path='/bloghome/bloglogin' element={<BlogLogin  setIsAuth={setIsAuth}  />} />
            </Route>
            <Route path='/' element={<Secssions isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        </Routes>
    </Router>
  );
}

export default App;
