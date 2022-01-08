import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import PatientDashboard from './PatientDashboard';
import PatientAppointments from './PatientAppointments';
import { mainListItems } from './PatientListItems';
import PatientAppointmentHistory from './PatientAppointmentHistory';
import PatientPrescriptions from './PatientPrescriptions';
import { NotFound } from '../';

const Patient = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path= "/patient">
                        <Dashboard 
                            title="Patient Dashboard"
                            children={<PatientDashboard />}
                            mainListItems={mainListItems}
                        />
                    </Route> 

                    <Route path= "/patient/dashboard">
                        <Dashboard 
                                title="Patient Dashboard"
                                children={<PatientDashboard />}
                                mainListItems={mainListItems} 
                        />
                    </Route>
                    <Route path="/patient/appointments" >
                        <Dashboard 
                                title="Patient Dashboard"
                                children={<PatientAppointments />}
                                mainListItems={mainListItems} 
                        />
                    </Route>
                    <Route path="/patient/appointment-history" >
                        <Dashboard 
                                title="Patient Dashboard"
                                children={<PatientAppointmentHistory />}
                                mainListItems={mainListItems} 
                        />
                    </Route>
                    <Route path="/patient/prescriptions" >
                        <Dashboard 
                                title="Patient Dashboard"
                                children={<PatientPrescriptions />}
                                mainListItems={mainListItems} 
                        />
                    </Route>
                    
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
            
        </>
    )
}
export default Patient
