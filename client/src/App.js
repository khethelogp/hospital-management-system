import React from 'react';
import { Signup2 } from './components' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Admin, Doctor, Home, NotFound, Patient } from './pages';
import { AdminRoute, DoctorRoute, PrivateRoute } from './routes';

import AuthProvider from './contexts/AuthContext';
import DbProvider from './contexts/DbContext';

import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import './App.css';

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
        // type: "dark"
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
                                <PrivateRoute path='*' component={NotFound}/>
                            </Switch>
                        </DbProvider>  
                    </AuthProvider>
                </Router>    
            </div>
        </ThemeProvider>
    )
}

export default App
