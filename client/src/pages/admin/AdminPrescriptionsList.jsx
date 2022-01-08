import React from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';
import AdminTable from './AdminTable';
import { useDB } from '../../contexts/DbContext';

import useStyles from './styles';

const columns = [
    { id: 'doctorName', label: 'Doctor Name', minWidth: 130 },
    { id: 'patientName', label: 'Patient Name', minWidth: 130 },
    { id: 'disease', label: 'Sickness', minWidth: 130 },
    { id: 'medication', label: 'Prescription', minWidth: 130 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 130 },
    { id: 'patientID', label: 'Patient ID', minWidth: 130 },
    { id: 'doctorID', label: 'Doctor ID', minWidth: 130 },
];

const AdminPrescriptionsList = (props) => {
    const classes = useStyles();
    const { allPrescriptions } = useDB();

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
                                <AdminTable columns={columns} rows={allPrescriptions}/>
                            </Paper>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>  
        </>
    )
}

export default AdminPrescriptionsList

