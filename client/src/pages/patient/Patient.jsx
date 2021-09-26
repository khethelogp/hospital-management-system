import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import PatientDashboard from './PatientDashboard';
import PatientAppointments from './PatientAppointments';
import { mainListItems, secondaryListItems } from './PatientListItems';

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
                            secondaryListItems={secondaryListItems}
                        />
                    </Route> 

                    <Route path= "/patient/dashboard">
                        <Dashboard 
                                title="Patient Dashboard"
                                children={<PatientDashboard />}
                                mainListItems={mainListItems} 
                                secondaryListItems={secondaryListItems}
                        />
                    </Route>
                    <Route path="/patient/appointments" >
                        <Dashboard 
                                title="Patient Dashboard"
                                children={<PatientAppointments />}
                                mainListItems={mainListItems} 
                                secondaryListItems={secondaryListItems}
                        />
                    </Route>
                    
                </Switch>
            </Router>
            
        </>
    )
}
export default Patient
