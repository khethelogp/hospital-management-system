import React,{ useContext, useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore'
import { useAuth } from './AuthContext';

const DbContext = React.createContext()
export function useDB() {
    return useContext(DbContext);
}


export default function DbProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const { currentUser } = useAuth();
    const [userAppointments, setUserAppointments] = useState([]);


    const usersCollectionRef = collection(db, "users");
    const doctorsCollectionRef = collection(db, "doctors");
    const appointmentsCollectionRef = collection(db, "appointments");
    
    const fetchUsers = async() => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchDoctors = async() => {
        const data = await getDocs(doctorsCollectionRef);
        setDoctors(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    // create new user in the DB
    const createUser = async(fName, lName, mail, contact, userId) => {
        await addDoc(usersCollectionRef, {
            firstName: fName,
            lastName: lName,
            email: mail,
            phone: contact,
            uid: userId 
        });   
    }

    // create a new doctor in the DB
    const createNewDoctor = async(drname, specialty, mail, passcode, roomNr) => {
        await addDoc(doctorsCollectionRef, {
            name: drname,
            specialization: specialty,
            email: mail,
            password: passcode,
            roomNumber: roomNr,
        });
    }

    // create a new Appointment
    const createNewAppointment = async(drName, drRoom, date, time, pID, dID ) => {
        await addDoc(appointmentsCollectionRef, {
            name: drName,
            roomNumber: drRoom,
            appointmentDate: date,
            appointmentTime: time,
            patientID: pID,
            doctorID: dID
        });
    }


    // deleteing a doctor
    const deleteDoctor = (id) => {
        return deleteDoc(doc(db, "doctors", id));
    }

    // console.log(doctors);

    // !queries to DB
    const q = query(appointmentsCollectionRef, where("patientID", "==", `${currentUser && currentUser.uid }`));
    const fetchUserAppointments = async() => {
        const data = await getDocs(q);
        setUserAppointments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    console.log(userAppointments);

    // value to return forn useDB();
    const value = {
        users,
        doctors,
        createUser,
        createNewDoctor,
        deleteDoctor,
        createNewAppointment,
        userAppointments
    }

    useEffect(() => {
        setUserAppointments([]);
        fetchUsers();
        fetchDoctors();
        fetchUserAppointments();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}
