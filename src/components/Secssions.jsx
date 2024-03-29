import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";
import CrispComponent from "./Crisp";
import { useContext } from "react";
import { AuthContext } from "../AthContext";

const Secssions = () => {
  const {isDarkMode, setIsDarkMode} = useContext(AuthContext)

  return (
    <div className= 'App flex flex-col justify-between items-center w-full'>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <CrispComponent />
    </div>
  )
}

export default Secssions