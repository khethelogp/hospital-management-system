import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker} from '@mui/lab/';

const doctors = [
    { name: "Dr. Smith", specialzation: "General", room: 135},
    { name: "Dr. Hughes", specialzation: "Cardiologist", room: 125},
    { name: "Dr. Magagula", specialzation: "Gynaecologist", room: 120},
    { name: "Dr. Nkosi", specialzation: "Dermatologist", room: 115},
    { name: "Dr. Strange", specialzation: "Pediatrician", room: 105},
    { name: "Dr. Noorbai", specialzation: "Neurologist", room: 140},
]


const PatientForm = () => {
    const classes = useStyles();

    const initialValues = {
        specialzation: '',
        doctor: '',
        roomNumber: 1,
        appointmentDate: new Date(),
        appointmentTime: new Date(),
    }

    const [dateValue, setDateValue] = useState(null);
    const [timeValue, setTimeValue] = useState(new Date('2014-08-18T21:11:54'));
    const[room, setRoom] = useState(0);
    const handleInputChange = (newValue) => {
        setTimeValue(newValue);
    };


    const validationSchema = Yup.object().shape({
        specialzation: Yup.string().required("Please select a secialization").oneOf(doctors),
        doctor: Yup.string().required("Please select a doctor").oneOf(doctors),
        appointmentDate: Yup.date().default(() => new Date()).required('Please choose a date'),
        appointmentTime: Yup.date().default(() => new Date().getTime()).required('Please choose a time')
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    
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

    }


    return (
            
            // <form className={classes.root}>
            <Formik
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
                                    /* value={formik.values.specialzation}
                                    onChange={formik.handleChange} */
                                    helperText={<ErrorMessage name="specialzation"/>}
                                >
                                    <MenuItem key={""} value={null}>
                                        Nothing Selected 
                                    </MenuItem>
                                    {doctors.map((item) => (
                                        <MenuItem key={item.specialzation} value={item.specialzation}>
                                        {item.specialzation}
                                        </MenuItem>
                                    ))}
                                </Field>

                                <TextField 
                                    variant="outlined"
                                    label="Doctor"
                                    name="doctor"
                                    id="doctor"
                                    select
                                    fullWidth
                                    // value={values.doctor}
                                    onChange={handleDoctorChange}
                                    helperText="Please select a Doctor"
                                >
                                    {doctors.map((option) => (
                                        <MenuItem key={option.name} value={option.name}>
                                        {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField 
                                    variant="outlined"
                                    //label={fee ? fee : "Consultancy Fee" } 
                                    label={room ? room : "Room Number"}
                                // name="consultancyFee"
                                    name= "room number"
                                    //id="consultancyFee"
                                    id="room number"
                                    disabled
                                    color="secondary"
                                />
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Date"
                                        value={dateValue}
                                        onChange={(newValue) => {
                                        setDateValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText="Please choose a date" />}
                                    />
                                    <TimePicker
                                        label="Time"
                                        value={timeValue}
                                        onChange={handleInputChange}
                                        renderInput={(params) => <TextField {...params} helperText="Please select a time" />}
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
        // </form>
    )
}

export default PatientForm
