import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
  const [user, setuser] = useState({})
  const [loading, setLoading] = useState(true)
  const googleprovider = new GoogleAuthProvider();
  const auth = getAuth();
  const signingoogle = () => {

    return signInWithPopup(auth, googleprovider)
    .finally(() => { setLoading(false) });
  }
  const logout = () => {
    signOut(auth).then(() => {
      setuser({})
      // Sign-out successful.
    }).finally(() => setLoading(false))
  }
  //observe user auth state change or not >>>>>
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user);
        }
        else {
            setuser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
}, [])

  return {
    user,
    signingoogle,
    logout,
    loading

  }
}
export default useFirebase;