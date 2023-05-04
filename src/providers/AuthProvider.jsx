import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    const profileUpdate = (name, photo) => {
        return (updateProfile(auth.currentUser, {
            displayName: `${name}`,
            photoURL: `${photo}`
        }))
    }
    const authInfo = {
        user, createUser, logInUser, logOut, googleLogin,gitHubLogin, loader, profileUpdate
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;