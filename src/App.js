import { useState } from "react";
import React from "react";
import {  Routes, Route } from "react-router-dom";
import BlogHome from "./blog/pages/BlogHome";
import CreatePost from "./blog/pages/CreatePost";
import BlogLogin from "./blog/pages/BlogLogin";
import Secssions from "./components/Secssions";
import BlogPosts from "./blog/pages/BlogPosts";
import Signup from "./blog/pages/Signup";
import { AuthContextProvider } from "./AthContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
 console.log(isAuth, setIsDarkMode)
  return (
    <AuthContextProvider>
        <Routes>
          <Route
            path="/bloghome"
            element={
              <BlogHome
              />
            }
          >
            <Route
              index
              element={
                <BlogPosts
                />
              }
            />
            <Route
              path="/bloghome/createpost"
              element={<CreatePost  />}
            />
            <Route
              path="/bloghome/bloglogin"
              element={
                <BlogLogin  />
              }
            />
            <Route
              path="/bloghome/signup"
              element={<Signup setIsAuth={setIsAuth} isDarkMode={isDarkMode} />}
            />
          </Route>
          <Route
            path="/"
            element={
              <Secssions
              />
            }
          />
        </Routes>
    </AuthContextProvider>
  );
}

export default App;
