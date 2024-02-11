import { Outlet, Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "./Button";

const BlogHome = ({ isAuth, setIsAuth, isDarkMode }) => {
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
        } bg-[#0a192f] bg-cover w-full  `}
      >
        <nav
          className={`${
            isDarkMode ? "bg-[#9896f1]" : "bg-[#0a192f]"
          }  w-full h-[80px] flex justify-between items-center px-4   z-10 font-semibold fixed top-0`}
        >
          <Link to="/bloghome">Home</Link>
          {!isAuth ? (
            <Link to="/bloghome/bloglogin">Login</Link>
            ) : (
              <>
              <Link to="/bloghome/createpost">Create Post</Link>
              <Button signUserOut={signUserOut} />
            </>
          )}
          <Link to="/">Portfolio</Link>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default BlogHome;
