import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; }

const blog = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element />
        </Routes>
    </Router>
  )
}

export default blog