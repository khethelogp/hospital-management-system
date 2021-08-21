import React from 'react';
import { Signup, Login } from './components' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {Helmet} from "react-helmet";

import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
    return (
        <div className="App">       
            <Helmet>
                <meta charSet="utf-8" />
                <title>HMS</title>
                <link rel="canonical" href="#" />
            </Helmet>
            
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/home' component={Home} />
                    <Route path='/products' component={Products}/>
                    <Route path='/reports' component={Reports}/>
                </Switch>
            </Router>
            
        </div>
    )
}

export default App
