import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import { useAuth } from '../../contexts/AuthContext';

import useStyles from './styles';

const DoctorDashboard = () => {
    const  classes = useStyles();
    const { currentUser } = useAuth(); 

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3} >
                    <Grid item lg={12} md={12} sm={12}>
                        <Typography component="h1" variant="h4" color="primary" gutterBottom >
                            Welcome ({currentUser.displayName || currentUser.email})
                        </Typography>            
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <BsIcons.BsCalendar />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        View Appointments 
                                    </Typography>
                                    <Typography variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        List all available patient appointments. 
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button 
                                    variant="outlined" 
                                    component={Link} 
                                    to="/doctor/appointments"
                                >
                                    Appointment list
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <GiIcons.GiLoveInjection />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        Prescriptions 
                                    </Typography>
                                    <Typography variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        View all prescriptions 
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button 
                                    variant="outlined" 
                                    component={Link} 
                                    to="/doctor/prescriptions"
                                >
                                    Prescriptions
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container> 
        </>
    )
}

export default DoctorDashboard
