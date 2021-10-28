import React,{ useContext, useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const DbContext = React.createContext()
export function useDB() {
    return useContext(DbContext);
}


export default function DbProvider({ children }) {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    
    const fetchUsers = async() => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    
    const value = {
        users
    }

    useEffect(() => {
        fetchUsers();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}
