import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';


const PatientDashboard = () => {
    return (
        <>
        <Grid container spacing={3} >
            <Grid item>
                <Typography component="h1" variant="h4" color="primary" gutterBottom >Welcome User</Typography>            
            </Grid>
        </Grid>
        </>
    )
}

export default PatientDashboard
