import { createContext, useContext, useState } from "react";
import { auth, provider } from "./firebase-config"; // Import your Firebase configuration
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [accountIsAvailable, setAccountIsAvailable] = useState(false);
  const navigate = useNavigate();

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      navigate("/bloghome/bloglogin");
      toast.success("Please Verify your Email");
    } catch (error) {
      console.log(error);
      setAccountIsAvailable(true);
    }
  }

  async function logIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user.emailVerified) {
        console.log('use is verified')
        navigate("/bloghome");
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
      } else {
        toast.error("Please Verify your Email");
      }
    } catch (error) {
      console.log(error);
      setAccountIsAvailable(true);
    }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (!result.user.emailVerified) {
        throw new Error(
          "Email not verified. Please verify your email to login."
        );
      }
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/bloghome");
    } catch (error) {
      console.log(error);
    }
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      navigate("/bloghome");
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        signUserOut,
        signInWithGoogle,
        isAuth,
        setIsAuth,
        isDarkMode,
        setIsDarkMode,
        accountIsAvailable,
      }}
    >
      {children}
    <ToastContainer position="bottom-left" />
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
