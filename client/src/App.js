import React from 'react';
import { Signup2 } from './components' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Patient from './pages/patient/Patient';
import Doctor from './pages/doctor/Doctor';
import Admin from './pages/admin/Admin';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import AdminRoute from './components/PrivateRoute/AdminRoute';
import DoctorRoute from './components/PrivateRoute/DoctorRoute';
import DbProvider from './contexts/DbContext';
import Home from './pages/home/Home';

const theme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
        main: "#f83245",
        light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    }
})

const App = () => {

    
    // TODO add theme and theme provider
    return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">       
                    <Router>
                        <AuthProvider>
                            <DbProvider>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/login' component={Home} />
                                    <Route path='/signup' component={Signup2} />
                                    <Route path='/forgot-password' component={ForgotPassword} />
                                    <AdminRoute path='/admin' component={Admin} />
                                    <DoctorRoute path='/doctor' component={Doctor}/>
                                    <PrivateRoute path='/patient' component={Patient}/>
                                    {/* <Route exact path='/' component={Login} /> */}
                                    {/* <Route path='/login' component={Login} /> */}
                                    {/* <Route path='/signup' component={Signup} /> */}
                                    {/* <PrivateRoute path='/admin' component={Admin} /> */}
                                    {/* <PrivateRoute path='/doctor' component={Doctor}/> */}
                                </Switch>
                            </DbProvider>  
                        </AuthProvider>
                    </Router>    
                </div>
            </ThemeProvider>
    )
}

export default App
