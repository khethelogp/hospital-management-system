import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import PatientTable from './PatientTable';

function createData(name, roomNumber, appointmentDate, appointmentTime) {
    return { name, roomNumber, appointmentDate, appointmentTime};
}

const rows = [
    createData('Dr. Smith', '1', '2020-11-20', '14:30:00'),
    createData('Dr. Noorbai', '6', '2020-11-15', '12:00:00'),
    createData('Dr. Magagula', '3', '2020-11-29', '09:15:00'),
    
];

const columns = [
    { id: 'name', label: 'Doctor Name', minWidth: 150 },
    { id: 'roomNumber', label: 'Room Number', minWidth: 170 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'appointmentTime', label: 'Appointment Time', minWidth: 170 },
];


const PatientAppointmentHistory = () => {
    const  classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Appointment History
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <PatientTable columns={columns} rows={rows}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default PatientAppointmentHistory
