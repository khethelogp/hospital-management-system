import React from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';
import AdminTable from './AdminTable';
import { useDB } from '../../contexts/DbContext';

import useStyles from './styles';


const columns = [
    { id: 'uid', label: 'Patient ID', minWidth: 170 },
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'phone', label: 'Contact', minWidth: 170 },
];

const AdminPatientList = (props) => {
    const classes = useStyles();
    const { users } = useDB();

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
                                <AdminTable columns={columns} rows={users && users}/>
                            </Paper>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>  
        </>
    )
}

export default AdminPatientList
