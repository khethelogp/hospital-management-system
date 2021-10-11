import React, { useState } from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography, Button, TableBody, TableRow, TableCell, TableContainer } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';
import AdminTable from './AdminTable';


import useStyles from './styles';

function createData(doctorName, pID, id, firstName, lastName, aDate, aTime, disease, allergy, prescription) {
    return { doctorName, pID, id, firstName, lastName, aDate, aTime, disease, allergy, prescription };
}


const rows = [
    createData('Dr. Smith', 1 ,1,'Kennedi', 'Werner', '11-10-2021', '10:00', 'cough', 'fever', 'Paracetamol'),
    createData('Dr. Magagula', 2 ,2,'Gerald', 'King', '15-10-2021', '13:00', 'cough', 'fever', 'Paracetamol'),
    createData('Dr. Strange', 3 ,3,'Grace', 'Miller', '11-10-2021', '10:00', 'cough', 'nothing', 'Paracetamol'),
    createData('Dr. Magagula', 4 ,4,'Tasha', 'Fisher', '15-10-2021', '18:00', 'cough', 'fever', 'Paracetamol'),
    createData('Dr. Magagula', 5 ,5,'Abel', 'Clay', '15-10-2021', '13:00', 'cough', 'fever', 'Vitamin C'),
    createData('Dr. Magagula', 6 ,6,'Nathen', 'Buck', '15-10-2021', '13:00', 'cough', 'nothing', 'Paracetamol'),
    createData('Dr. Magagula', 7 ,705,'Susan', 'Jacobs', '15-10-2021', '13:00', 'cough', 'fever', 'Paracetamol'),
    createData('Dr. Magagula', 8 ,8,'Bongani', 'Manzini', '15-10-2021', '13:00', 'cough', 'fever', 'Vitamin C'),
    createData('Dr. Magagula', 9 ,9,'Britney', 'Larsen', '15-10-2021', '13:00', 'cough', 'fever', 'Paracetamol'),
    createData('Dr. Magagula', 10 ,10,'Eve', 'Franco', '15-10-2021', '13:00', 'cough', 'fever', 'Vitamin C'),
];

const columns = [
    { id: 'doctorName', label: 'Doctor Name', minWidth: 130 },
    { id: 'pID', label: 'Patient ID', minWidth: 130 },
    { id: 'id', label: 'Appointment ID', minWidth: 130 },
    { id: 'firstName', label: 'First Name', minWidth: 130 },
    { id: 'lastName', label: 'Last Name', minWidth: 130 },
    { id: 'aDate', label: 'Appointment Date', minWidth: 130 },
    { id: 'aTime', label: 'Appointment Time', minWidth: 130 },
    { id: 'disease', label: 'Disease', minWidth: 130 },
    { id: 'allergy', label: 'Allergy', minWidth: 130 },
    { id: 'prescription', label: 'Prescription', minWidth: 130 },
];

const AdminPrescriptionsList = (props) => {
    const classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            All Prescriptions
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5}>
                            <Toolbar>
                                <Controls.Input
                                    label="Search Prescription"
                                    className={classes.searchInput}
                                    InputProps={{
                                        startAdornment: (<InputAdornment position="start">
                                                    <Search />
                                            </InputAdornment>
                                            )
                                        }}
                                        onChange={()=>{}}
                                />
                            </Toolbar>
                            <Paper className={classes.paperContent} elevation={3}>
                                <AdminTable columns={columns} rows={rows}/>
                            </Paper>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>  
        </>
    )
}

export default AdminPrescriptionsList

