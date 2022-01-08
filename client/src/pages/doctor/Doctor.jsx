import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from '../';
import Dashboard from '../../components/Dashboard/Dashboard';
import DoctorAppointments from './DoctorAppointments';
import DoctorDashboard from './DoctorDashboard';
import { mainListItems } from './DoctorListItems';
import DoctorPrescriptions from './DoctorPrescriptions';


const Doctor = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path= "/doctor">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorDashboard />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route path= "/doctor/dashboard">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorDashboard />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route path= "/doctor/appointments">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorAppointments />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route path= "/doctor/prescriptions">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorPrescriptions />}
                            mainListItems={mainListItems} 
                        />
                    </Route>
                    
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
            
        </>
    )
}

export default Doctor
