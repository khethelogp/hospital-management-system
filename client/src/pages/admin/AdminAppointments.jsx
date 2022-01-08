import React from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';
import AdminTable from './AdminTable';
import { useDB } from '../../contexts/DbContext';


import useStyles from './styles';

const columns = [
    { id: 'patientName', label: 'Patient Name', minWidth: 150 },
    { id: 'name', label: 'Doctor Name', minWidth: 150 },
    { id: 'roomNumber', label: 'Room Number', minWidth: 170 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'appointmentTime', label: 'Appointment Time', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 170 },
    { id: 'patientID', label: 'Patient ID', minWidth: 170 },
    { id: 'doctorID', label: 'Doctor ID', minWidth: 170 },
];

const AdminAppointments = (props) => {
    const classes = useStyles();
    const { allAppointments } = useDB(); 

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            All Appointments
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5}>
                            <Toolbar>
                                <Controls.Input
                                    label="Search Appointment"
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
                                <AdminTable columns={columns} rows={allAppointments}/>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default AdminAppointments

