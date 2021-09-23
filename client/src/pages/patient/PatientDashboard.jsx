import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import * as BsIcons from 'react-icons/bs';

import useStyles from './styles';

//const cards = [{ cardIcon: },{}];

const PatientDashboard = () => {
    const  classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3} >
                    <Grid item lg={12} md={4} sm={12}>
                        <Typography component="h1" variant="h4" color="primary" gutterBottom >Welcome User</Typography>            
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <BsIcons.BsCalendar />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        Book My Appointment 
                                    </Typography>
                                    <Typography         variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        Request to see a doctor by booking an appointment
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="outlined">Book Appointment</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <BsIcons.BsClockHistory />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        My Appointments
                                    </Typography>
                                    <Typography 
                                        variant="subtitle2"
                                        color="text.secondary"
                                        textAlign="center"
                                    >
                                        View Appointment History
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="outlined">View History</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                
                </Grid>
            </Container>
        </>
    )
}

export default PatientDashboard
