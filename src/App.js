import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className= 'App flex flex-col justify-between items-center w-full'>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
