import React from 'react';
import { Button, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import useStyles from './styles';
import { Card } from '@material-ui/core';
import * as BsIcons from 'react-icons/bs';

const PatientAppointments = () => {
    const  classes = useStyles();
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
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
                                    <Button variant="contained">Book Appointment</Button>
                                </CardActions>
                            </Card>
                    </Grid>
                </Grid>
            </Container>
            
        </>
    )
}

export default PatientAppointments
