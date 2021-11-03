import React,{ useContext, useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

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

    const createNewDoctor = async(drname, specialty, mail, passcode, roomNr) => {
        await addDoc(doctorsCollectionRef, {
            name: drname,
            specialization: specialty,
            email: mail,
            password: passcode,
            roomNumber: roomNr,
        });
    }

    /* const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = {age: age + 1};
        await updateDoc(userDoc, newFields);
    } */

    const deleteDoctor = (id) => {
        return deleteDoc(doc(db, "doctors", id))
    }

    /* const deleteDoctor = (id) => {
        const userDoc = doc(db, "doctors", id);
        return deleteDoc(userDoc);
    }  */


    // value to return forn useDB();
    const value = {
        users,
        doctors,
        createUser,
        createNewDoctor,
        deleteDoctor,
    }

    useEffect(() => {
        fetchUsers();
        fetchDoctors();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}
