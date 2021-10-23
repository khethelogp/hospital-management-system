import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from '@firebase/auth'

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext);
}

const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logout = () => {
    return signOut(auth)
}

const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })
    
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
