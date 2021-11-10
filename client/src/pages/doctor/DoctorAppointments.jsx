import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import DoctorTable from './DoctorTable';

function createData(name, appointmentDate, appointmentTime, status) {
    return { name, appointmentDate, appointmentTime, status};
}

const rows = [
    createData('Jo-Anna Nkosi', '2021-12-15', '08:30', "active"),
    createData('Neville Muza', '2021-12-15', '08:30', "not active"),
    createData('Tom Smith', '2021-12-15', '08:30', "not active"),
    createData('Bruce Wayne', '2021-12-15', '08:30', "active"),
    createData('Angela Alderson', '2021-12-15', '08:30', "active"),
    createData('Sarah Tomson', '2021-12-15', '08:30', "not active"),
];


const columns = [
    // { id: 'name', label: 'Patient Name', minWidth: 150 },
    { id: 'patientID', label: 'Patient ID', minWidth: 150 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'appointmentTime', label: 'Appointment Time', minWidth: 170 },
    { id: 'status', label: 'Appointment Time', minWidth: 170 },
];


const DoctorAppointments = () => {
    const  classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Appointments
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <DoctorTable columns={columns} rows={rows}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default DoctorAppointments;
