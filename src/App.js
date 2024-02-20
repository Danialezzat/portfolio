import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/bloghome"
            element={
              <BlogHome
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                isDarkMode={isDarkMode}
              />
            }
          >
            <Route
              index
              element={
                <BlogPosts
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/bloghome/createpost"
              element={<CreatePost isAuth={isAuth} isDarkMode={isDarkMode} />}
            />
            <Route
              path="/bloghome/bloglogin"
              element={
                <BlogLogin setIsAuth={setIsAuth} isDarkMode={isDarkMode} />
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
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            }
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
