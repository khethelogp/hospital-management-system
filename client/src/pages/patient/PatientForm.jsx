import React, { useState } from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker} from '@mui/lab/';

const doctors = [
    { name: "Dr. Smith", specialzation: "General", fee: 100},
    { name: "Dr. Hughes", specialzation: "Cardiologist", fee: 200},
    { name: "Dr. Magagula", specialzation: "Gynaecologist", fee: 300},
    { name: "Dr. Strange", specialzation: "Pediatrician", fee: 400},
    { name: "Dr. Noorbai", specialzation: "Neurologist", fee: 500},
]


const PatientForm = () => {
    const classes = useStyles();

    const initialValues = {
        specialzation: '',
        doctor: '',
        consultantcyFee: 0,
        appointmentDate: new Date(),
        appointmentTime: new Date(),
    }

    const [values, setValues] = useState(initialValues);
    const [dateValue, setDateValue] = useState(null);
    const [timeValue, setTimeValue] = useState(new Date('2014-08-18T21:11:54'));
    const [fee, setFee] = useState(0);

    const handleInputChange = (newValue) => {
        setTimeValue(newValue);
    };

    //const specializations = ["General", "Cardiologist","c" ,"Pediatrician", "Neurologist"];
    //const doctors = ["Dr. Smith", "Dr. Hughes", "Dr. Magagula ", "Dr. Strange" ,"Dr. Noorbai"];
    

    const validationSchema = Yup.object().shape({
        specialzation: Yup.string().required("Please select a secialization").oneOf(doctors),
        doctor: Yup.string().required("Please select a secialization").oneOf(doctors),
        appointmentDate: Yup.date().default(() => new Date()),
        appointmentDate: Yup.date().default(() => new Date().getTime())
    })
    
    const handleDoctorChange  = (e) => {
        switch (e.target.value) {
            case doctors[0].name:{
                setFee(doctors[0].fee);        
                break;
            }
            case doctors[1].name:{
                setFee(doctors[1].fee);        
                break;
            }
            case doctors[2].name:{
                setFee(doctors[2].fee);        
                break;
            }
            case doctors[3].name:{
                setFee(doctors[3].fee);        
                break;
            }
            case doctors[4].name:{
                setFee(doctors[4].fee);        
                break;
            }
            default:
                setFee(0);
                break;
        }

    }


    return (
            
            <form className={classes.root}>

            
            <Grid Container>
                <Grid item xs={12} lg={6}>
                    <TextField 
                        variant="outlined"
                        label="Specialization"
                        name="specialization"
                        id="specialization"
                        select
                        fullWidth
                        // value={values.specialzation}
                        // onChange={handleInputChange}
                        helperText="Please select a specialization"
                    >
                        {doctors.map((option) => (
                            <MenuItem key={option.specialzation} value={option.specialzation}>
                            {option.specialzation}
                            </MenuItem>
                        ))}
                    </TextField>
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
                        label={fee ? fee : "Consultantcy Fee" } 
                        name="consultancyFee"
                        id="consultancyFee"
                        disabled
                        color="secondary"
                    />
        

                </Grid>
                <Grid item xs={12} lg={6}>
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
            </Grid>            
        </form>
    )
}

export default PatientForm
