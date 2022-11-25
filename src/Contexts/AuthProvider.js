import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    // email password sign up 

    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in with email password 

    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sign in 

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // observer part 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe()
    }, [])


    // updating user 
    // updating profile 

    const updateName = (name, role) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }


    // log out 

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        emailSignUp,
        emailSignIn,
        googleLogin,
        user,
        loading,
        updateName,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;