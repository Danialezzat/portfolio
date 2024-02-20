import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "./firebase-config"; // db
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";




export const AuthContext = createContext();


export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [isDarkMode, setIsDarkMode] = useState(true);
    const navigate = useNavigate()

    // const navigate = useNavigate();
  
    function signUp(email, password) {
      createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log('ath is working till with email');
      navigate('/bloghome')
    //   setDoc(doc(db,'users', email),
    //   {
    //     savedShows: [],
    //   })
        
    }
  
    function logIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log('ath is working till with email');
        navigate('/bloghome')
        
    }

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log('ath is working till here');
        navigate('/bloghome')
        
      });
    };
  
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          navigate('/bloghome')
          // navigate("/bloghome/bloglogin");
          
        });
      };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => {
        unsubscribe();
      };
    },[]);
  
    return (
      // user is
      <AuthContext.Provider value={{ signUp, logIn, signUserOut, signInWithGoogle, isAuth, setIsAuth, isDarkMode, setIsDarkMode }}> 
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function UserAuth() {
    return useContext(AuthContext);
  }