import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config'
import toast from 'react-hot-toast';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] =useState(false);
  const googleProvider = new GoogleAuthProvider();

  const signUp = (email, password, imageURL, name) => {
    setLoading(true);
    setErrorMsg(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageURL
        })
          .then(userAccount => {
            toast.success('Account Created Sucessfully');
            setUser(userAccount);
          })
      })
      .catch(error => console.log(error.message))
  }

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Sign Out Sucessfully.')
        setUser(null)
      })
      .catch((error) => {
        setErrorMsg(error)
      })
  }

  const signIn = (email, password)=>{
    setLoading(true);
    setErrorMsg(null);

    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      setUser(result.user);
      toast.success(`Welcome back ${result.user.displayName}.`);
    })
    .catch(error=> setErrorMsg(error.message))
  }

  const signInWithGoogle = () =>{
    setLoading(true);
    setErrorMsg(null);

    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      setUser(result.user);
    })
    .catch((error)=> setErrorMsg(error.message))
  }
  
  const setDarkMode = ()=>{
    setIsDark(!isDark)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        setLoading(false);
        setUser(data);
      } else {
        setLoading(false);
      }
    })
    return () => {
      unsubscribe()
    }
  }, [user])

  const appInfo = {
    signUp,
    user,
    errorMsg,
    signOutUser,
    signIn,
    signInWithGoogle,
    loading,
    setDarkMode,
    isDark
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
