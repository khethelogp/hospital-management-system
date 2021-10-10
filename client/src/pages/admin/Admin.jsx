import React,{ useState } from 'react';
import { Navbar } from '../../components';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Container, Grid,Button, Typography } from '@material-ui/core';
import * as userService from '../../services/userService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { mainListItems, secondaryListItems } from './AdminListItems';
import Dashboard from '../../components/Dashboard/Dashboard';
import useStyles from './styles';
import AdminDashboard from './AdminDashboard';
import AdminDoctorList from './AdminDoctorList';

const Admin = () => {
    const classes = useStyles();

    return (
        <>  
            <Router>
                <Switch>
                    <Route exact path= "/admin">
                        <Dashboard 
                            title="Admin Dashboard"
                            children={<AdminDashboard />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>

                    <Route exact path= "/admin/dashboard">
                        <Dashboard 
                            title="Admin Dashboard"
                            children={<AdminDashboard />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>
        
                    <Route exact path= "/admin/doctor-list">
                        <Dashboard 
                            title="Admin Dashboard"
                            children={<AdminDoctorList />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>
                </Switch>
            </Router>


            {/* <div className={classes.container}>
                <Paper className={classes.pageContent} >
                    <Typography variant="h6">This is it ?</Typography>
                </Paper>
            </div> */}
            
        </>
    )
}

export default Admin
