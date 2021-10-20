import React from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';
import AdminTable from './AdminTable';

import useStyles from './styles';

function createData( id, pID, firstName, lastName, gender, email, contact, doctorName, roomNum, aDate, aTime, aStatus) {
    return { id , pID, firstName, lastName, gender, email, contact, doctorName, roomNum, aDate, aTime, aStatus };
}


const rows = [
    createData(1 ,1,'Kennedi', 'Werner', 'Male', '@email.com', '0712345678', 'Dr. Smith', '100', '11-10-2021', '10:00','active'),
    createData(2 ,2,'Gerald', 'King', 'Male', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','active'),
    createData(3 ,3,'Grace', 'Miller', 'Female', '@email.com', '0712345678', 'Dr. Strange', '400', '11-10-2021', '10:00','active'),
    createData(4 ,4,'Tasha', 'Fisher', 'Female', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '18:00','active'),
    createData(5 ,5,'Abel', 'Clay', 'Male', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','canceled by Doctor'),
    createData(6 ,6,'Nathen', 'Buck', 'Male', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','active'),
    createData(7 ,705,'Susan', 'Jacobs', 'Female', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','active'),
    createData(8 ,8,'Bongani', 'Manzini', 'Male', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','canceled by Doctor'),
    createData(9 ,9,'Britney', 'Larsen', 'Female', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','active'),
    createData(10 ,10,'Eve', 'Franco', 'Female', '@email.com', '0712345678', 'Dr. Magagula', '300', '15-10-2021', '13:00','canceled by Patient'),
    
];

const columns = [
    { id: 'id', label: 'Appointment ID', minWidth: 130 },
    { id: 'pID', label: 'Patient ID', minWidth: 130 },
    { id: 'firstName', label: 'First Name', minWidth: 130 },
    { id: 'lastName', label: 'Last Name', minWidth: 130 },
    { id: 'gender', label: 'Gender', minWidth: 130 },
    { id: 'email', label: 'Email', minWidth: 130 },
    { id: 'contact', label: 'Contact', minWidth: 130 },
    { id: 'doctorName', label: 'Doctor Name', minWidth: 130 },
    { id: 'roomNum', label: 'Room Number', minWidth: 130, align: 'right' },
    { id: 'aDate', label: 'Appointment Date', minWidth: 130 },
    { id: 'aTime', label: 'Appointment Time', minWidth: 130 },
    { id: 'aStatus', label: 'Appointment Status', minWidth: 130 },
];

const AdminAppointments = (props) => {
    const classes = useStyles();

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
                                <AdminTable columns={columns} rows={rows}/>
                            </Paper>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>  
        </>
    )
}

export default AdminAppointments

