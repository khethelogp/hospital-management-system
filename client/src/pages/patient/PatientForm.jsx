import React from 'react';
import { Container, CssBaseline, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box } from '@mui/system';


const PatientForm = () => {
    const classes = useStyles();

    const initialValues = {
        specialzation: '',
        doctor: '',
        consultantcyFee: 0,
        appointmentDate: new Date(),
        appointmentTime: new Date(),
    }

    const specializations = ["General", "Cardiologist","Gynaecologist" ,"Pediatrician", "Neurologist"];
    const doctors = ["Dr. Smith", "Dr. Hughes", "Dr. Strange" ,"Dr. Nkosi"];


    const validationSchema = Yup.object().shape({
        specialzation: Yup.string().required("Please select a secialization").oneOf(specializations),
        doctor: Yup.string().required("Please select a secialization").oneOf(doctors),
        consultantcyFee: Yup.string().required(),
        appointmentDate: Yup.date().default(() => new Date()),
        appointmentDate: Yup.date().default(() => new Date().getTime())

    })
    
    return (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <Grid Container>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="specialization"
                        name="specialization"
                        id="specialization"
                        select
                        fullWidth
                        helperText="Please select a specialization"
                    >
                        {specializations.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                        variant="outlined"
                        label="doctor"
                        name="doctor"
                        id="doctor"
                        select
                        fullWidth
                        helperText="Please select a Doctor"
                    >
                        {doctors.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>

                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Box>
    )
}

export default PatientForm
