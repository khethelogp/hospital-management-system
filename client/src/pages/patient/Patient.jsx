import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard'
import PatientDashboard from './PatientDashboard'
import { mainListItems, secondaryListItems } from './PatientListItems';

const Patient = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Dashboard 
                            title="Patient Dashboard"
                            children={<PatientDashboard />}
                            mainListItems={mainListItems} 
                            secondaryListItems={secondaryListItems}
                    />
                    
                    <Route path="/patient/dashboard" component={PatientDashboard} />                        
                    <Route path="/patient/appointments" component={PatientDashboard} />
                    
                </Switch>
            </Router>
            
        </>
    )
}
export default Patient
