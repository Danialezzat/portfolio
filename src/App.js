import { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import BlogHome from './blog/pages/BlogHome';
import CreatePost from './blog/pages/CreatePost';
import BlogLogin from './blog/pages/BlogLogin';
import Secssions from "./components/Secssions";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
        <Routes>
            <Route path='/bloghome' element={<BlogHome isAuth={isAuth} setIsAuth={setIsAuth} />} >
              <Route path='/bloghome/createpost' element={<CreatePost isAuth={isAuth} />} />
              <Route path='/bloghome/bloglogin' element={<BlogLogin  setIsAuth={setIsAuth}  />} />
            </Route>
            <Route path='/portfolio' element={<Secssions isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        </Routes>
    </Router>
  );
}

export default App;
