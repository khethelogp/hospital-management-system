import React, { useState } from 'react';
import { Button, CssBaseline, Grid, MenuItem, TextField } from '@mui/material';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker} from '@mui/lab/';
import { useDB } from '../../contexts/DbContext';


const PatientForm = () => {
    const classes = useStyles();
    const { doctors } = useDB();

    const initialValues = {
        specialization: '',
        doctor: '',
        roomNumber: 1,
        appointmentDate: new Date(),
        appointmentTime: new Date(),
        email: ''
    }

    const [room, setRoom] = useState(0);
    const [dateValue, setDateValue] = useState(null);
    const [timeValue, setTimeValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleInputChange = (newValue) => {
        setTimeValue(newValue);
    };
    
    
    const validationSchema = Yup.object().shape({
        specialization: Yup.string().required("Please select a specialization"),
        doctor: Yup.string().required("Please select a doctor"),
        appointmentDate: Yup.date().required('Please choose a date'),
        appointmentTime: Yup.date().required('Please choose a time'),
        // email: Yup.string().email('Please enter a valid email').required('Required'),
        // appointmentTime: Yup.date().default(() => new Date().getTime()).required('Please choose a time'),

    })
    

    const handleSubmit = (values, props) => {

        console.log(values);
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
                                    {/*! use filter or reduce to remove duplicates  */}

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
                                                    uid: cur.id
                                                }
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
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <CssBaseline />
                                    
                                    <Field
                                        as={DatePicker}
                                        name="appointmentDate"
                                        label="Date"
                                        id="appointmentDate"
                                        required
                                        value={dateValue}
                                        onChange={(newValue) => {
                                        setDateValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={<ErrorMessage name="appointmentDate"/> } />}
                                    />
                                    {/* <DatePicker
                                        name="appointmentDate"
                                        label="Date"
                                        id="appointmentDate"
                                        value={dateValue}
                                        onChange={(newValue) => {
                                        setDateValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={<ErrorMessage name="appointmentDate"/>} />}
                                    /> */}
                                    <TimePicker
                                        name="appointmentTime"
                                        label="Time"
                                        id="appointmentTime"
                                        value={timeValue}
                                        onChange={handleInputChange}
                                        renderInput={(params) => <TextField {...params} helperText={<ErrorMessage name="appointmentTime"/>} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ m: 2 }}
                                >
                                    Book Appointment
                                </Button>
                            </Grid>
                        </Grid> 
                    </Form>
                )}
        </Formik>
    )
}

export default PatientForm
