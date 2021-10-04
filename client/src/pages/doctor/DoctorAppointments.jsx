import React from 'react';
import { Button, CardActions, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import DoctorTable from './DoctorTable';


const DoctorAppointments = () => {
    const  classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Appointment History
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <DoctorTable />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default DoctorAppointments;
