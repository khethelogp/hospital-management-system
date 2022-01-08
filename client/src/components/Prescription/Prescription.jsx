import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, Alert } from '@mui/material';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useDB } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';

import useStyles from './styles';

const initialValues = {
    disease: '',
    medication: ''
}

const Prescription = ({ appointment }) => {
    const classes = useStyles();

    const { createNewPrescription, prescribeMeds } = useDB();
    const { currentUser } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        disease: Yup.string().required('Sickness is required'),
        medication: Yup.string().required('Medication is required'),
    });

    const handleSubmit = async(values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
        
        console.log(appointment);

        try {
            setError('');
            setLoading(true);
            
            createNewPrescription(appointment.name, appointment.patientName, appointment.appointmentDate, appointment.patientID, appointment.doctorID, values.disease, values.medication);
            
            prescribeMeds(appointment.id, currentUser.displayName || 'you');

            setMessage('Prescription successfully made.');
        } catch (error) {
            setError('Failed to make prescription.');
        }

        setLoading(false);

    }

    return (
            <Paper className={classes.paperContent} elevation={5}>
                {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}

                {message && <Alert severity="success" sx={{ my: 1, width:'100%' }} >{message}</Alert>}

                <Formik
                    initialValues={initialValues}
                    autoComplete="off"
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit} 
                >
                    {(props) => (
                        <Form className={classes.root}>
                            <Grid container className={classes.container}>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        label="Sickness"
                                        name="disease"
                                        id="disease"
                                        fullWidth
                                        required
                                        autoFocus
                                        helperText={<ErrorMessage name="disease"/>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        label="Medication"
                                        name="medication"
                                        id="medication"
                                        fullWidth
                                        required
                                        helperText={<ErrorMessage name="medication"/>}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        sx={{ m: 2, my: 4 }}
                                        disabled={loading}
                                    >
                                        { loading ? 'Loading ...' : 'Prescribe' }  
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Paper>            
    )
}

export default Prescription
