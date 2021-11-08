import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { DateTimePickerField } from '../../components';
import { useDB } from '../../contexts/DbContext';


const PatientForm = () => {
    const classes = useStyles();
    const { doctors } = useDB();

    const initialValues = {
        specialization: '',
        doctor: '',
        roomNumber: 1,
        appointmentDateTime: ''
    }

    const [room, setRoom] = useState(0);

    const validationSchema = Yup.object().shape({
        specialization: Yup.string().required("Please select a specialization"),
        doctor: Yup.string().required("Please select a doctor"),
        appointmentDateTime: Yup.date().required('Please choose a time'),   
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
                                {/*  <Field 
                                    component={DatePickerField}
                                    name="appointmentDate" 
                                    // label="Date"
                                    id="appointmentDate"
                                    variant="inline"
                                    // variant="outlined"
                                    inputVariant="outlined" 
                                    // helperText={<ErrorMessage name="appointmentDate"/>}
                                    renderInput={(params) => <TextField {...params} helperText={<ErrorMessage name="appointmentTime"/> } />}
                                />

                                <Field 
                                    component={TimePickerField}
                                    name="appointmentTime" 
                                    id="appointmentTime"
                                    variant="inline"
                                    // variant="outlined"
                                    inputVariant="outlined"
                                    placeholder="08:00 AM" 
                                    helperText={<ErrorMessage name="appointmentTime"/>}
                                /> */}

                                <Field 
                                    component={DateTimePickerField}
                                    name="appointmentDateTime" 
                                    id="appointmentDateTime"
                                    // variant="inline"
                                    variant="outlined"
                                    inputVariant="outlined"
                                    helperText={<ErrorMessage name="appointmentTime"/>}
                                />

                                
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                    variant="contained"
                                    type="submit"
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
