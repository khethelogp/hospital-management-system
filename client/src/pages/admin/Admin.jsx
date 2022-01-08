import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { mainListItems } from './AdminListItems';
import Dashboard from '../../components/Dashboard/Dashboard';
import AdminDashboard from './AdminDashboard';
import AdminDoctorList from './AdminDoctorList';
import AdminPatientList from './AdminPatientList';
import AdminAppointments from './AdminAppointments';
import AdminPrescriptionsList from './AdminPrescriptionsList';
import AdminAddDoctor from './AdminAddDoctor';
import AdminDeleteDoctor from './AdminDeleteDoctor';
import { NotFound } from '../';


const title = "Admin Dashboard";

const Admin = () => {

    return (
        <>  
            <Router>
                <Switch>
                    <Route exact path= "/admin">
                        <Dashboard 
                            title={title}
                            children={<AdminDashboard />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route exact path= "/admin/dashboard">
                        <Dashboard 
                            title={title}
                            children={<AdminDashboard />}
                            mainListItems={mainListItems} 
                        />
                    </Route>
        
                    <Route exact path= "/admin/doctor-list">
                        <Dashboard 
                            title={title}
                            children={<AdminDoctorList />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route exact path= "/admin/patient-list">
                        <Dashboard 
                            title={title}
                            children={<AdminPatientList />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route exact path= "/admin/all-appointments">
                        <Dashboard 
                            title={title}
                            children={<AdminAppointments />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route exact path= "/admin/all-prescriptions">
                        <Dashboard 
                            title={title}
                            children={<AdminPrescriptionsList />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route exact path= "/admin/add-doctor">
                        <Dashboard 
                            title={title}
                            children={<AdminAddDoctor />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route exact path= "/admin/delete-doctor">
                        <Dashboard 
                            title={title}
                            children={<AdminDeleteDoctor />}
                            mainListItems={mainListItems} 
                        />
                    </Route>

                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
            
        </>
    )
}

export default Admin
