import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import BlogHome from './pages/BlogHome'

const blog = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<BlogHome />} />
        </Routes>
    </Router>
  )
}

export default blog