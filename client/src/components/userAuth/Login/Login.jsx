import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import useStyles from './styles';
import Copyright from '../../Copyright/Copyright';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputAdornment, IconButton, Alert } from '@mui/material';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import { useAuth } from '../../../contexts/AuthContext';

//TODO Implement a doctor and admin signup with radio Buttons


const Login = () => {
    const  classes = useStyles();

    const initialValues = {
        email: '',
        password: '',
        showPassword: false,
        patient: true,
        admin: false,
        doctor: true, 
    }

    const [values, setValues] = useState(initialValues);
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [userRole, SetUserRole] = useState('patient');

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').required('Required'),
        password: Yup.string().required('Required')
    })

    const handleSubmit = async(values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        try {
            setError('')
            setLoading(true)
            await login(values.email, values.password)
            history.push('/patient')
            
        } catch (error) {
            setError('Failed to Sign In')
        } 

        setLoading(false)

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

    const handleRoleChange = (event) => {
        SetUserRole(event.target.value);
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
                        Log In
                    </Typography>

                    {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}
                    
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

                                <FormControl component="fieldset" sx={{my:1}}>
                                    <FormLabel component="legend">User Role</FormLabel>
                                    <RadioGroup 
                                        row 
                                        aria-label="userRole" 
                                        name="row-radio-buttons-group"
                                        value={userRole}
                                        onChange={handleRoleChange}
                                    >
                                        <FormControlLabel value="patient" control={<Radio />} label="patient" />
                                        <FormControlLabel value="doctor" control={<Radio />} label="doctor" />
                                        <FormControlLabel value="admin" control={<Radio />} label="admin" />
                                    </RadioGroup>
                                </FormControl>
                                

                                {/* <Field
                                    as={FormControlLabel} 
                                    name="admin"
                                    label="Admin"
                                    control={<Checkbox value="admin" color="primary" />}
                                /> */}
                                
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.submit}
                                    disabled={loading}
                                    // disabled={props.isSubmitting}
                                    onClick={() => {}}
                                >
                                    {loading ? "Loading..." : "Sign In" }  
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

        </>
    )
}

export default Login

