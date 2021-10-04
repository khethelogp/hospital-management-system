import React, { useState } from 'react'
import PatientTable from './PatientTable';
import { Container, Grid, Typography, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';

import { EditOutlined, Close } from '@material-ui/icons';
import useStyles from './styles';

const headCells = [
    { id: 'doctor', label: 'Doctor Name' },
    { id: 'appointmentID', label: 'Appointment ID' },
    { id: 'appointmentDate', label: 'Appointment Date' },
    { id: 'appointmentTime', label: 'Appointment Time' },
    { id: 'disease', label: 'Disease' },
    { id: 'allergies', label: 'Allergies' },
    { id: 'prescriptions', label: 'Prescriptions' },
    { id: 'billPayment', label: 'Bill Payment', disableSorting: true}
]

const PatientPrescriptions = () => {
    const  classes = useStyles();
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Prescriptions
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <PatientTable />
                        </Paper>
                    </Grid>
                </Grid>
            </Container> 
        </>
    )
}

export default PatientPrescriptions
