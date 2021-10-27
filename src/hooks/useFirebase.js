import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

import initializeAuthentication from "../pages/Login/firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     console.log(error.message);
        // })
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {

        }
        return () => unsubscribe;
    });

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        googleSignIn,
        logout
    }
}

export default useFirebase;