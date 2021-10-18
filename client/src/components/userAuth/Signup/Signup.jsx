import React,{ useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Box, Typography, Container, InputAdornment, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Copyright from '../../Copyright/Copyright';
import { Link as RouterLink } from 'react-router-dom';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Popup from '../../Popup/Popup';
import { VisibilityOff, Visibility } from '@material-ui/icons';


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
        phone: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    }

    const [values, setValues] = useState(initialValues);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email(emailError ? emailError : 'Please enter a valid email').required('Required'),
        phone: Yup.string().min(10, 'Please enter a valid phone number').required('Required'),
        password: Yup.string().min(6, passwordError ? passwordError : 'Password must be atleast 6 characters').required('Required'),
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

    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return (
        <>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Paper className={classes.paper} elevation={10}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4" className={classes.signUpText}>
                        Sign up as a patient
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
                                <Grid item xs={12} sm={6}>
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
                                <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                    helperText={<ErrorMessage name="phone"/>}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    helperText={<ErrorMessage name="password"/>}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>,
                                    }}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    type={values.showPassword ? 'text' : 'password'}
                                    autoComplete="confirm-password"
                                    helperText={<ErrorMessage name="confirmPassword"/>}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>,
                                    }}
                                />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
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
