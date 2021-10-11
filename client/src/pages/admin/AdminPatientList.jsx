import React, { useState } from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography, Button, TableBody, TableRow, TableCell, TableContainer } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';
import AdminTable from './AdminTable';


import useStyles from './styles';

function createData( id, firstName, lastName, gender, email, contact, password) {
    return { id, firstName, lastName, gender, email, contact, password };
}

const rows = [
    createData(1,'Kennedi', 'Werner', 'Male', '@email.com', '0712345678', 'user@password'),
    createData(2,'Gerald', 'King', 'Male', '@email.com', '0712345678', 'user@password'),
    createData(3,'Grace', 'Miller', 'Female', '@email.com', '0712345678', 'user@password'),
    createData(4,'Tasha', 'Fisher', 'Female', '@email.com', '0712345678', 'user@password'),
    createData(5,'Abel', 'Clay', 'Male', '@email.com', '0712345678', 'user@password'),
    createData(6,'Nathen', 'Buck', 'Male', '@email.com', '0712345678', 'user@password'),
    createData(705,'Susan', 'Jacobs', 'Female', '@email.com', '0712345678', 'user@password'),
    createData(8,'Bongani', 'Manzini', 'Male', '@email.com', '0712345678', 'user@password'),
    createData(9,'Britney', 'Larsen', 'Female', '@email.com', '0712345678', 'user@password'),
    createData(10,'Eve', 'Franco', 'Female', '@email.com', '0712345678', 'user@password'),
    
];

const columns = [
    { id: 'id', label: 'Patient ID', minWidth: 170 },
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'gender', label: 'Gender', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'contact', label: 'Contact', minWidth: 170 },
    { id: 'password', label: 'Password', minWidth: 170 },
    // { id: 'fees', label: 'Fees', minWidth: 170, align: 'right' }
];

const AdminPatientList = (props) => {
    const classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Patient List
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5}>
                            <Toolbar>
                                <Controls.Input
                                    label="Search Patient"
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

export default AdminPatientList
