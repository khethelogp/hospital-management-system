import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import DoctorTable from './DoctorTable';

function createData(name, appointmentDate, appointmentTime, disease, symptoms, medication) {
    return { name, appointmentDate, appointmentTime, disease, symptoms, medication};
}

const rows = [
    createData('Jo-Anna Mnisi', '2021-12-15', '08:30',  'cough', 'chest pains', 'Paracetamol'),
    createData('Grace Miller', '2021-11-20', '10:00', 'flu', 'high fever', 'Flu-shot'),
    createData('Neville Muza', '2021-11-22', '12:00', 'sore tummy', 'food poising', 'zinc'),
    createData('Abel Clay', '2021-10-15', '13:00', 'cough', 'fever', 'Vitamin C'),
    createData('Tom Smith', '2021-12-18', '09:00', 'headache', 'stress', 'pain block'),
    createData('Tasha Fisher', '2021-12-01', '15:00', 'cough', 'fever', 'Paracetamol'),
    createData('Bruce Wayne', '2021-12-01', '13:00', 'anxiety', 'nothing', 'Refered to therapist'),

];


const columns = [
    { id: 'name', label: 'Patient Name', minWidth: 150 },
    // { id: 'patientID', label: 'Patient ID', minWidth: 150 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'appointmentTime', label: 'Appointment Time', minWidth: 170 },
    { id: 'disease', label: 'Disease', minWidth: 170 },
    { id: 'symptoms', label: 'Symptoms', minWidth: 170 },
    { id: 'medication', label: 'Prescription', minWidth: 170 },
];



const DoctorPrescriptions = () => {
    const  classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Prescription History
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <DoctorTable columns={columns} rows={rows} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default DoctorPrescriptions;
