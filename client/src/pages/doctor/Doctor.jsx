import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import DoctorAppointments from './DoctorAppointments';
import DoctorDashboard from './DoctorDashboard';
import { mainListItems, secondaryListItems } from './DoctorListItems';
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
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>

                    <Route path= "/doctor/dashboard">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorDashboard />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>

                    <Route path= "/doctor/appointments">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorAppointments />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>

                    <Route path= "/doctor/prescriptions">
                        <Dashboard 
                            title="Doctors Dashboard"
                            children={<DoctorPrescriptions />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                        />
                    </Route>

                </Switch>
            </Router>
            
        </>
    )
}

export default Doctor
