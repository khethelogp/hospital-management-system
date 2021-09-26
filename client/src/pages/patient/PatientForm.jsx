import React from 'react';
import { Container, CssBaseline, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import useStyles from './styles'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


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
        <Container component="main" maxWidth="m">
            <CssBaseline />
            <Paper className={classes.paper} elevation={10}>
                <Typography component="h1" variant="h6">
                    Create an Appointment
                </Typography>
                <Formik  initialValues={initialValues} onSubmit={()=>{}} validationSchema={validationSchema}>
                    {(props) => (
                        <Form autoComplete="off">
                            <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    select
                                    id="specialization"
                                    label="Specialization"
                                    placeholder=""
                                    name="specialization"
                                    autoComplete="specialization"
                                    autoFocus
                                    helperText={<ErrorMessage name="specialization" />}
                            >
                                {specializations.map((option) =>(
                                    <MenuItem key={option} value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </Field>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>
    )
}

export default PatientForm
