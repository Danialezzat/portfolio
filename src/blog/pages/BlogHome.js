import { Outlet, Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "./Button";
import { CiLogin } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../AthContext";

const BlogHome = () => {
  const {isAuth, setIsAuth, isDarkMode} = useContext(AuthContext)


  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/bloghome/bloglogin");
    });
  };

  return (
    <>
      <div
        className={`${
          isDarkMode ? " bg-[#dedede] text-black" : " bg-[#0a192f] text-white"
        } bg-[#0a192f] bg-cover w-full flex flex-col justify-center items-center`}
      >
        <nav
          className={`${
            isDarkMode ? "bg-[#9896f1]" : "bg-[#0a192f]"
          }  w-[95%] rounded-lg  h-[80px] flex justify-between items-center px-4    z-10 font-semibold fixed top-4`}
        >
          <div className="flex ">
            <Link to="/bloghome">Home</Link>
            <Link className="pl-6" to="/">Portfolio</Link>
          </div>
          {!isAuth ? (
            <div className="flex justify-center items-center
            ">
              <Link  to="/bloghome/Signup">Sign Up</Link>
              
              <Link className="ml-6 flex justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-lg" to="/bloghome/bloglogin">Log In<CiLogin className="font-bold text-2xl"/></Link>
            </div>
            
            
            ) : (
              <>
              
              <Button signUserOut={signUserOut} />
            </>
          )}
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default BlogHome;
