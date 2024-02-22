import { createContext, useContext, useState } from "react";
import { auth, provider } from "./firebase-config"; // db
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth"; //onAuthStateChanged
// import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  // const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [accountIsAvailable, setAccountIsAvailable] = useState(false)
  const navigate = useNavigate();

  // const navigate = useNavigate();

  async function signUp(email, password) {
    // createUserWithEmailAndPassword(auth, email, password);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log("ath is working till google");
        navigate("/bloghome"); 
      });
    } catch (error) {
      console.log(error);

    }
  }

  async function logIn(email, password) {
    // return signInWithEmailAndPassword(auth, email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log("ath is working till google");
        navigate("/bloghome"); 
      });
    } catch (error) {
      console.log(error);
      setAccountIsAvailable(true)

    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log("ath is working till here");
        navigate("/bloghome");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/bloghome");
    });
  };

 

  return (
    // user is
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
        accountIsAvailable
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
