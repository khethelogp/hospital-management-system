import React from 'react';
import { Signup, Login } from './components' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Patient from './pages/patient/Patient';
import Doctor from './pages/doctor/Doctor';
import Admin from './pages/admin/Admin';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

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
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path='/login' component={Login} />
                                <Route path='/signup' component={Signup} />
                                <Route path='/forgot-password' component={ForgotPassword} />
                                <PrivateRoute path='/admin' component={Admin} />
                                <PrivateRoute path='/doctor' component={Doctor}/>
                                <PrivateRoute path='/patient' component={Patient}/>
                            </Switch>
                        </AuthProvider>
                    </Router>    
                </div>
            </ThemeProvider>
    )
}

export default App
