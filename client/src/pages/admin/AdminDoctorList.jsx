import React from 'react';
import { Container, Grid, InputAdornment,Paper, Toolbar, Typography, Button } from '@mui/material';
import Controls from '../../components/Controls/Controls';
import { Search } from '@material-ui/icons';

import useStyles from './styles';

const headCells = [
    { id: 'doctorName', label: 'Doctor Name' },
    { id: 'specializtion', label: 'Specialization' },
    { id: 'doctorEmail', label: 'Email Address' },
    { id: 'password', label: 'Password' },
    { id: 'fees', label: 'Fees' },
]

const AdminDoctorList = () => {
    const classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Appointment History
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5}>
                            <Toolbar>
                                <Controls.Input
                                    label="Search Doctor"
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
                        </Paper>
                    </Grid>
    
                </Grid>
            </Container>
        </>
    )
}

export default AdminDoctorList
