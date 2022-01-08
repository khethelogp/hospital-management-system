import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { DateTimePickerField } from '../../components';
import { useDB } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from '@mui/material';


//? Convert Date to YYYY-MM-DD
function convertToDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}

//? Convert Time to hh:mm:ss
function convertToTime(str) {
    var date = new Date(str),
        mins = ("0" + (date.getMinutes() + 1)).slice(-2),
        secs = ("0" + date.getSeconds()).slice(-2);
    return [date.getHours(), mins, secs].join(":");
}

const PatientForm = () => {
    const classes = useStyles();
    const { doctors, createNewAppointment } = useDB();
    const { currentUser } = useAuth();


    const initialValues = {
        specialization: '',
        doctor: '',
        appointmentDateTime: Date.now()
    }

    const [room, setRoom] = useState(0);
    const [doctorID, setDoctorID] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const status = 'active';
    const [message, setMessage] = useState('');

    const validationSchema = Yup.object().shape({
        specialization: Yup.string().required("Please select a specialization"),
        doctor: Yup.string().required("Please select a doctor"),
        appointmentDateTime: Yup.date().required('Please choose a date and a time'),   
    })
    
    const handleSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
        
        try {
            setError('');
            setLoading(true);
            createNewAppointment(values.doctor, room,`${currentUser.displayName || currentUser.email}`,convertToDate(values.appointmentDateTime), convertToTime(values.appointmentDateTime), currentUser.uid, doctorID, status);
            setMessage('Appointment successfuly booked.');       
        } catch (error) {
            setError('Failed to create Doctor Account.');
        }
        
        setLoading(false);
    }
    
    return (
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema} 
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form className={classes.root}>
                        <Grid container className={classes.container}>

                            {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}

                            {message && <Alert severity="success" sx={{ my: 1, width:'100%' }} >{message}</Alert>}

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Field 
                                    as={TextField}
                                    variant="outlined"
                                    label="Specialization"
                                    name="specialization"
                                    id="specialization"
                                    select
                                    fullWidth
                                    helperText={<ErrorMessage name="specialization"/>}
                                >

                                    {doctors.map((option) => (
                                        <MenuItem key={option.uid} value={option.specialization}>
                                            {option.specialization}
                                        </MenuItem>
                                    ))}

                                </Field>

                                <Field 
                                    as={TextField}
                                    variant="outlined"
                                    label="Doctor"
                                    name="doctor"
                                    id="doctor"
                                    select
                                    fullWidth
                                    helperText={<ErrorMessage name="doctor"/>}
                                >
                                    
                                    {doctors.reduce((acc, cur) => {
                                            if(cur.specialization === props.values.specialization){
                                                let newDoctor = { 
                                                    name: cur.name, 
                                                    specialization: cur.specialization,
                                                    roomNumber: cur.roomNumber,
                                                    uid: cur.uid
                                                }
                                                setDoctorID(newDoctor.uid)
                                                setRoom(Number(newDoctor.roomNumber))
                                                acc.push(newDoctor)
                                            } 
                                            return acc
                                        },[]).map((option) => (
                                        <MenuItem key={option.uid} value={option.name}>
                                        {option.name}
                                        </MenuItem>
                                    ))}
                                    
                                    {/* {doctors.reduce((acc, cur) => {
                                            if(cur.specialization === props.values.specialization){
                                                acc.push(cur.name)
                                            } 
                                            return acc
                                        },[]).map((option) => (
                                        <MenuItem key={option} value={option}>
                                        {option}
                                        </MenuItem>
                                    ))} */}

                                </Field>
                                
                                <Field
                                    as={TextField} 
                                    variant="outlined" 
                                    label={room ? room : "Room Number"}
                                    name= "room number"
                                    id="room number"
                                    disabled
                                    color="secondary"
                                />
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Field 
                                    component={DateTimePickerField}
                                    name="appointmentDateTime" 
                                    id="appointmentDateTime"
                                    variant="outlined"
                                    inputVariant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    size="large"
                                    disabled={loading}
                                    sx={{ m: 2 }}
                                >
                                    {
                                        loading ? "Loading..." : "Book Appointment"
                                    }
                                </Button>
                            </Grid>
                        </Grid> 
                    </Form>
                )}
        </Formik>
    )
}

export default PatientForm
