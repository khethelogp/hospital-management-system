import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import DoctorTable from './DoctorTable';
import { useDB } from '../../contexts/DbContext';

const columns = [
    { id: 'patientName', label: 'Patient Name', minWidth: 150 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'disease', label: 'Disease', minWidth: 170 },
    { id: 'medication', label: 'Prescription', minWidth: 170 },
];

const DoctorPrescriptions = () => {
    const  classes = useStyles();

    const { doctorPrescriptions } = useDB();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Prescription History
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <DoctorTable columns={columns} rows={doctorPrescriptions} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default DoctorPrescriptions;
