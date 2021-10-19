import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import PatientForm from './PatientForm';

const PatientAppointments = () => {
    const  classes = useStyles();
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Create an Appointment
                        </Typography>

                        <Paper className={classes.paperContent}>    
                            <PatientForm />          
                        </Paper>    
                    </Grid>
                </Grid>
            </Container>
            
        </>
    )
}

export default PatientAppointments
