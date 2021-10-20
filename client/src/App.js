import React from 'react';
import { Signup, Login } from './components' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Patient from './pages/patient/Patient';
import Doctor from './pages/doctor/Doctor';
import Admin from './pages/admin/Admin';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

// import { AuthProvider } from './contexts/AuthContext'

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
        // <AuthProvider>    
        <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">       
                    <Router>
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path='/login' component={Login} />
                                <Route path='/signup' component={Signup} />
                                <Route path='/admin' component={Admin} />
                                <Route path='/doctor' component={Doctor}/>
                                <Route path='/patient' component={Patient}/>
                            </Switch>
                    </Router>    
                </div>
            </ThemeProvider>
        // </AuthProvider>
    )
}

export default App
