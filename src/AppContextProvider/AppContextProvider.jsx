import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config'
import toast from 'react-hot-toast';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password, imageURL, name) => {
    setLoading(true);
    setErrorMsg(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageURL
        })
          .then(() =>{
            setUser(result.user)
            toast.success('Account created sucessfully')
          })
          .catch(error => setErrorMsg(error))
      })
      .catch(error => setErrorMsg(error.message))
  }



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        setLoading(false);
        setUser(user);
        console.log(user);
      }
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  const appInfo = {
    signUp,
    user,
    errorMsg
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
