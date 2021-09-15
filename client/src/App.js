import React,{ useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { Signup, Login } from './components' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {Helmet} from "react-helmet";
import Home from './pages/Home';
import Patients from './pages/patients/Patients';
import Doctors from './pages/doctors/Doctors';
import Dashboard from './pages/Dashboard';
import Admin from './pages/admin/Admin';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsIIcjQuDMnyl8-S8YAoUuX3Mit_wwHK4",
    authDomain: "hospital-system-d2696.firebaseapp.com",
    projectId: "hospital-system-d2696",
    storageBucket: "hospital-system-d2696.appspot.com",
    messagingSenderId: "518280124200",
    appId: "1:518280124200:web:bb028cb9ca364fbcfde21d"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire);

const App = () => {
    const [user, setUser] = useState('');
    const [fireEmail, setFireEmail] = useState('');
    const [firePassword, setFirePassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearInputs = () => {
        setFireEmail('');
        setFirePassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        signInWithEmailAndPassword(auth, fireEmail, firePassword)
        .catch((err) => {
            console.log(err.code)
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
                default: 
                    break;
            }
        });
    };

    const handleSignup = () => {
        clearErrors();
        createUserWithEmailAndPassword(auth, fireEmail, firePassword)
        .catch((err) => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                default: 
                    break;
            }
        });
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Success")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    };

    const authListener = () => {
        onAuthStateChanged(auth, user => {
            if(user){
                clearInputs();
                setUser(user);
            }else {
                setUser('');
            }
        })
    }

    useEffect(() => {
        authListener();
        console.log(user);
    },[user])

    // TODO add theme and theme provider
    return (
        <div className="App">       
            <Helmet>
                <meta charSet="utf-8" />
                <title>HMS</title>
                <link rel="canonical" href="#" />
            </Helmet>
            
            <Router>
                <Switch>
                    <Route exact path='/' >
                            {user ? (
                                // TODO use useContext for passing logout fuction to home
                                <Home handleLogout={handleLogout} />
                            ) : (
                                <Login 
                                    setFireEmail={setFireEmail}
                                    setFirePassword={setFirePassword}
                                    handleLogin={handleLogin}
                                    handleSignup={handleSignup}
                                    emailError={emailError}
                                    passwordError={passwordError}
                                />
                            ) }
                    </Route>
                    <Route path='/signup'>
                        <Signup 
                            setFireEmail={setFireEmail}
                            setFirePassword={setFirePassword}
                            handleSignup={handleSignup}
                            emailError={emailError}
                            passwordError={passwordError}
                        />
                    </Route>
                    <Route path='/login'>
                        <Login 
                            setFireEmail={setFireEmail}
                            setFirePassword={setFirePassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            emailError={emailError}
                            passwordError={passwordError}
                        />
                    </Route>
                    <Route path='/home' component={Home} />
                    <Route path='/admin' component={Admin} />
                    <Route path='/patients' component={Patients}/>
                    <Route path='/doctors' component={Doctors}/>
                    <Route path='/dashboard' component={Dashboard}/>
                </Switch>
            </Router>
            
        </div>
    )
}

export default App