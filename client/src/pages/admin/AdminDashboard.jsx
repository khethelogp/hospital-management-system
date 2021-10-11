import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Add, Delete, VerifiedUser } from '@material-ui/icons';


import useStyles from './styles';

const AdminDashboard = () => {
    const  classes = useStyles();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3} >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <PageHeader
                            title="Admin"
                            subTitle="Administrator"
                            icon={<VerifiedUser fontSize="large" />}
                        />           
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <FaIcons.FaUserMd />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        Doctor List 
                                    </Typography>
                                    <Typography variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        List all available doctors. 
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button 
                                    variant="outlined" 
                                    component={Link} 
                                    to="/admin/doctor-list"
                                >
                                    Doctor List
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <FaIcons.FaUsers />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        Patient List 
                                    </Typography>
                                    <Typography variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        List all registered patients. 
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button 
                                    variant="outlined" 
                                    component={Link} 
                                    to="/admin/patient-list"
                                >
                                    Patient List
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <BsIcons.BsCalendar />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        Appointment Details
                                    </Typography>
                                    <Typography variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        View All Appointments 
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button 
                                    variant="outlined" 
                                    component={Link} 
                                    to="/admin/all-appointments"
                                >
                                    Appointments
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <GiIcons.GiMedicines />
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
                                    to="/admin/all-prescriptions"
                                >
                                    Prescriptions
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <CardContent >
                                <Card className={classes.cardIcon}>
                                    <FaIcons.FaUsersCog />
                                </Card>
                                <div className={classes.cardContent}>    
                                    <Typography className={classes.cardTitle} variant="h5" component="h1">
                                        Doctor Accounts
                                    </Typography>
                                    <Typography variant="subtitle2"  color="text.secondary"
                                    textAlign="center"
                                    >
                                        Manage All Doctors 
                                    </Typography>
                                </div>        
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button 
                                    variant="outlined"
                                    color="primary" 
                                    endIcon={<Add />}
                                    component={Link} 
                                    to="/admin/add-doctor"
                                >
                                    Add 
                                </Button>
                                <Button 
                                    variant="outlined"
                                    color="error" 
                                    endIcon={<Delete />}
                                    component={Link} 
                                    to="/admin/delete-doctor"
                                >
                                    Delete 
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>
            </Container> 
        </>
    )
}

export default AdminDashboard
