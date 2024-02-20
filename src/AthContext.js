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
import { Navigate } from "react-router-dom";




export const AuthContext = createContext();


export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    // const navigate = useNavigate();
  
    function signUp(email, password) {
      createUserWithEmailAndPassword(auth, email, password);
    //   setDoc(doc(db,'users', email),
    //   {
    //     savedShows: [],
    //   })
        
    }
  
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log('ath is working till here');
        <Navigate to="/somewhere/else" />
      });
    };
  
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          // navigate("/bloghome/bloglogin");
          <Navigate to="/somewhere/else" />
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
      <AuthContext.Provider value={{ signUp, logIn, signUserOut, signInWithGoogle }}> 
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function UserAuth() {
    return useContext(AuthContext);
  }