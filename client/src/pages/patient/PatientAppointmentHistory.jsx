import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import PatientTable from './PatientTable';
import { useDB } from '../../contexts/DbContext';

function createData(name, roomNumber, appointmentDate, appointmentTime) {
    return { name, roomNumber, appointmentDate, appointmentTime};
}

const rows = [
    createData('N/A', 'N/A', 'N/A', 'N/A'),
    
];

const columns = [
    { id: 'name', label: 'Doctor Name', minWidth: 150 },
    { id: 'roomNumber', label: 'Room Number', minWidth: 170 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'appointmentTime', label: 'Appointment Time', minWidth: 170 },
];


const PatientAppointmentHistory = () => {
    const  classes = useStyles();

    const { userAppointments } = useDB();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Appointment History
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5}>
                            {userAppointments ? 
                                <PatientTable columns={columns} rows={userAppointments}/>
                                :
                                <PatientTable columns={columns} rows={rows}/>
                            }    
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default PatientAppointmentHistory
