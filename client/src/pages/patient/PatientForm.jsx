import React, { useState } from 'react';
import { Button, CssBaseline, Grid, MenuItem, TextField } from '@mui/material';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker} from '@mui/lab/';

const doctors = [
    { name: "Dr. Smith", specialization: "General", room: 135},
    { name: "Dr. Hughes", specialization: "Cardiologist", room: 125},
    { name: "Dr. Magagula", specialization: "Gynaecologist", room: 120},
    { name: "Dr. Nkosi", specialization: "Dermatologist", room: 115},
    { name: "Dr. Strange", specialization: "Pediatrician", room: 105},
    { name: "Dr. Noorbai", specialization: "Neurologist", room: 140},
]


const PatientForm = () => {
    const classes = useStyles();

    const initialValues = {
        specialization: '',
        doctor: '',
        roomNumber: 1,
        appointmentDate: new Date(),
        appointmentTime: new Date(),
        email: ''
    }

    const [dateValue, setDateValue] = useState(null);
    const [timeValue, setTimeValue] = useState(new Date('2014-08-18T21:11:54'));
    // const[room, setRoom] = useState(0);
    const handleInputChange = (newValue) => {
        setTimeValue(newValue);
    };


    const validationSchema = Yup.object().shape({
        specialization: Yup.string().required("Please select a specialization"),
        doctor: Yup.string().required("Please select a doctor"),
        appointmentDate: Yup.date().required('Please choose a date'),
        appointmentTime: Yup.date().required('Please choose a time'),
        email: Yup.string().email('Please enter a valid email').required('Required'),
        // appointmentTime: Yup.date().default(() => new Date().getTime()).required('Please choose a time'),

    })
    
    /*
    const handleDoctorChange  = (e) => {
        switch (e.target.value) {
            case doctors[0].name:{
                setRoom(doctors[0].room);        
                break;
            }
            case doctors[1].name:{
                setRoom(doctors[1].room);        
                break;
            }
            case doctors[2].name:{
                setRoom(doctors[2].room);        
                break;
            }
            case doctors[3].name:{
                setRoom(doctors[3].room);        
                break;
            }
            case doctors[4].name:{
                setRoom(doctors[4].room);        
                break;
            }
            default:
                setRoom(0);
                break;
        }
    } */


    return (
            
            <Formik
                onSubmit={(values) => {
                    console.log(values)
                }}
                initialValues={initialValues}
                validationSchema={validationSchema} 
                autoComplete="off"
            >
                {(props) => (
                    <Form className={classes.root}>
                        <Grid container className={classes.container}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    name="specialization"
                                    label="Specialization"
                                    id="specialization"
                                    required
                                    select
                                    fullWidth
                                    helperText={<ErrorMessage name="specialization"/>}
                                >
                                    {doctors.map((item) => (
                                        <MenuItem key={item.specialization} value={item.specialization}>
                                        {item.specialization}
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
                                    {doctors.map((option) => (
                                        <MenuItem key={option.name} value={option.name}>
                                        {option.name}
                                        </MenuItem>
                                    ))}
                                </Field>

                                <Field
                                    as={TextField} 
                                    variant="outlined" 
                                    // label={room ? room : "Room Number"}
                                    label="Room Number"
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
