import React,{ useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Copyright from '../../Copyright/Copyright';
import { Link as RouterLink } from 'react-router-dom';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Popup from '../../Popup/Popup';

const Signup = ({ setFireEmail, setFirePassword, handleSignup, emailError, passwordError }) => {

    const  classes = useStyles();

    /* const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState(''); */
    const [openPopup, setOpenPopup] = useState(false);
    const [signEmail, setSignEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');


    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Please enter a valid email').required('Required'),
        password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Required')
    })

    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        setSignEmail(values.email);
        setSignPassword(values.password);
        setFireEmail(values.email);
        setFirePassword(values.password);

        Axios.post("http://localhost:3001/signup", {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password 
        }).then((response) => {
            console.log(response);
        })

    }
    
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper} elevation={10}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4" className={classes.signUpText}>
                        Sign up
                    </Typography>

                    <Formik 
                        initialValues={initialValues} 
                        onSubmit={onSubmit} 
                        validationSchema={validationSchema} 
                        autoComplete="off"
                    >
                        {(props) => (
                            <Form>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    helperText={<ErrorMessage name="firstName"/>}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    helperText={<ErrorMessage name="lastName"/>}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    helperText={<ErrorMessage name="email"/>}
                                />
                                </Grid>
                                <p className="errorMsg">{emailError}</p>
                                <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    helperText={<ErrorMessage name="password"/>}
                                />
                                </Grid>
                                <p className="errorMsg">{passwordError}</p>
                                <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="confirm-password"
                                    helperText={<ErrorMessage name="confirmPassword"/>}
                                />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={props.isSubmitting}
                                onClick={handleSignup}
                            >
                                {props.isSubmitting ? 'Loading...': 'Sign Up' }
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                <Link component={RouterLink} to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                                </Grid>
                            </Grid>
                            </Form>
                        )}
                    </Formik>
                    
                </Paper>
                <Box mt={5}>
                    <Copyright />
                </Box>
                </Container>
                <Popup 
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    title="Success"
                    message="You have successfully created your account"        
                >
                    <div className={classes.popupText}> 
                        <Typography component="h1" variant="body2">Email: {signEmail}</Typography>
                        <Typography component="h1" variant="body2">Password: {signPassword}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => setOpenPopup(false)}
                        > 
                            Close
                        </Button>
                    </div>
                </Popup>                    
        </>
    )
}

export default Signup
