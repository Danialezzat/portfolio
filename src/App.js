import { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import BlogHome from './blog/pages/BlogHome';
import CreatePost from './blog/pages/CreatePost';
import BlogLogin from './blog/pages/BlogLogin';
import Secssions from "./components/Secssions";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
        <Routes>
            <Route path='/bloghome' element={<BlogHome />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/bliglogin' element={<BlogLogin />} />
            <Route path='/portfolio' element={<Secssions isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        </Routes>
    </Router>
  );
}

export default App;
