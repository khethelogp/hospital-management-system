import React,{ useContext, useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

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

    const createUser = async(fName, lName, mail, contact, userId) => {
        await addDoc(usersCollectionRef, {
            firstName: fName,
            lastName: lName,
            email: mail,
            phone: contact,
            uid: userId 
        })   
    }
    
    const value = {
        users,
        createUser,
    }

    useEffect(() => {
        fetchUsers();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    console.log(users);


    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}
