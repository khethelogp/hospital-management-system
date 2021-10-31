import React,{ useContext, useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const DbContext = React.createContext()
export function useDB() {
    return useContext(DbContext);
}


export default function DbProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [doctors, setDoctors] = useState([]);

    const usersCollectionRef = collection(db, "users");
    const doctorsCollectionRef = collection(db, "doctors");
    
    const fetchUsers = async() => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchDoctors = async() => {
        const data = await getDocs(doctorsCollectionRef);
        setDoctors(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    // create new collections in the DB
    const createUser = async(fName, lName, mail, contact, userId) => {
        await addDoc(usersCollectionRef, {
            firstName: fName,
            lastName: lName,
            email: mail,
            phone: contact,
            uid: userId 
        });   
    }

    const createNewDoctor = async(drname, specialty, mail, passcode, roomNr ) => {
        await addDoc(doctorsCollectionRef, {
            name: drname,
            specialization: specialty,
            email: mail,
            password: passcode,
            roomNumber: roomNr
        });
    }


    // value to return forn useDB();
    const value = {
        users,
        doctors,
        createUser,
        createNewDoctor,
    }

    useEffect(() => {
        fetchUsers();
        fetchDoctors();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    console.log(users);
    console.log(doctors);


    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}
