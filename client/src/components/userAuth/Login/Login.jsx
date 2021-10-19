import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Paper, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';
import Copyright from '../../Copyright/Copyright';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@material-ui/icons';


const Login = ({ setFireEmail, setFirePassword, handleLogin, emailError,passwordError }) => {
    
    const  classes = useStyles();

    const [loginStatus, setLoginStatus] = useState('');

    const initialValues = {
        email: '',
        password: '',
        showPassword: false,
        admin: false,
        doctor: false, 
    }

    const [values, setValues] = useState(initialValues);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(emailError ? emailError : 'Please enter a valid email').required('Required'),
        password: Yup.string().required(passwordError? passwordError : 'Required')
    })

    const handleSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        },2000)

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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper} elevation={10}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign in
                    </Typography>
                    
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form autoComplete="off">
                                <Field 
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    placeholder="Enter Email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    helperText={<ErrorMessage name="email" />}
                                />

                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    placeholder="Enter Password"
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    helperText={<ErrorMessage name="password" />}
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
                                <Field
                                    as={FormControlLabel} 
                                    name="admin"
                                    label="Admin"
                                    control={<Checkbox value="remember" color="primary" />}
                                />

                                <Field
                                    as={FormControlLabel} 
                                    name="doctor"
                                    label="Doctor"
                                    control={<Checkbox value="remember" color="primary" />}
                                />
                                
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.submit}
                                    disabled={props.isSubmitting}
                                    onClick={handleLogin}
                                >
                                    {props.isSubmitting? "Loading" : "Sign In" }  
                                </Button>
                                        
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Link href="#" variant="body2">
                                            {`Forgot password ? `}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Link component={RouterLink} to="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>                        
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Paper>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>

            <h1>{loginStatus}</h1>
        </>
    )
}

export default Login

