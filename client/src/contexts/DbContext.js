import React,{ useContext, useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, query, where, updateDoc } from 'firebase/firestore'
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
    const [userPrescriptions, setUserPrescriptions] = useState([]);
    const [doctorAppointments, setDoctorAppointments] = useState([]);
    const [doctorPrescriptions, setDoctorPrescriptions] = useState([]);
    const [allAppointments, setAllAppointments] = useState([]);
    const [allPrescriptions, setAllPrescriptions] = useState([]);


    const usersCollectionRef = collection(db, "users");
    const doctorsCollectionRef = collection(db, "doctors");
    const appointmentsCollectionRef = collection(db, "appointments");
    const prescriptionsCollectionRef = collection(db, "prescriptions");
    
    const fetchUsers = async() => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchDoctors = async() => {
        const data = await getDocs(doctorsCollectionRef);
        setDoctors(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchAllAppointments = async() => {
        const data = await getDocs(appointmentsCollectionRef);
        setAllAppointments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchAllPrescriptions = async() => {
        const data = await getDocs(prescriptionsCollectionRef);
        setAllPrescriptions(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
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
    const createNewAppointment = async(drName, drRoom, pName, date, time, pID, dID, aStatus ) => {
        await addDoc(appointmentsCollectionRef, {
            name: drName,
            roomNumber: drRoom,
            patientName: pName,
            appointmentDate: date,
            appointmentTime: time,
            patientID: pID,
            doctorID: dID,
            status: aStatus
        });
    }

    // creating a new prescription
    const createNewPrescription = async(drName, pName, aDate, pID, dID, sickness, meds) => {
        await addDoc(prescriptionsCollectionRef, {
            doctorName: drName,
            patientName: pName,
            appointmentDate: aDate,
            patientID: pID,
            doctorID: dID,
            disease: sickness,
            medication: meds
        });
    }

    // deleteing a doctor
    const deleteDoctor = (id) => {
        return deleteDoc(doc(db, "doctors", id));
    }

    // Fetching data from DB
    const fetchUserAppointments = async() => {
        const data = await getDocs(query(appointmentsCollectionRef, where("patientID", "==", `${currentUser && currentUser.uid }`)));
        setUserAppointments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchUserPrescriptions = async() => {
        const data = await getDocs(query(prescriptionsCollectionRef, where("patientID", "==", `${currentUser && currentUser.uid }`)));
        setUserPrescriptions(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchDoctorAppointments = async() => {
        const data = await getDocs(query(appointmentsCollectionRef, where("doctorID", "==", `${currentUser && currentUser.uid}`)));
        setDoctorAppointments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    const fetchDoctorPrescriptions = async() => {
        const data = await getDocs(query(prescriptionsCollectionRef, where("doctorID", "==", `${currentUser && currentUser.uid}`)));
        setDoctorPrescriptions(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }


    // delete appointment
    const deleteAppointment = async(id) => {
        await deleteDoc(doc(db, "appointments", id));
    }

    // cancel appointment
    const cancelAppointment = async(id, name) => {
        await updateDoc(doc(db, "appointments", id), {
            status: `canceled by ${name}`
        });
    }

    //  prescribe meds
    const prescribeMeds = async(id, name) => {
        await updateDoc(doc(db, "appointments", id), {
            status: `attended to by ${name}`
        });
    }

    // value to return forn useDB();
    const value = {
        users,
        doctors,
        createUser,
        createNewDoctor,
        deleteDoctor,
        createNewAppointment,
        userAppointments,
        userPrescriptions,
        doctorAppointments,
        doctorPrescriptions,
        allAppointments,
        allPrescriptions,
        cancelAppointment,
        deleteAppointment,
        prescribeMeds,
        createNewPrescription
    }

    useEffect(() => {
        fetchUsers();
        fetchDoctors();
        fetchAllAppointments();
        fetchAllPrescriptions();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // use effect for when use changes
    useEffect(() => {
        fetchUserAppointments();
        fetchUserPrescriptions();
        fetchDoctorAppointments();
        fetchDoctorPrescriptions();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]) 

    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}
