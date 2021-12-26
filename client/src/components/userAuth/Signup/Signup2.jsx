import React,{ useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Box, Typography, InputAdornment, IconButton } from '@material-ui/core';
import useStyles from './styles';
import Copyright from '../../Copyright/Copyright';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LockOutlined, VisibilityOff, Visibility  } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import { Alert } from '@mui/material';
import { useDB } from '../../../contexts/DbContext';


import bgImage from "../../../assets/bg-4.jpg";
const styles = {
    signUpBG: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
};

const Signup2 = () => {

    const  classes = useStyles();
    
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
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { createUser } = useDB();

    // database values
    const[ufirstName, setUFirstName]= useState('');
    const[ulastName, setULastName]= useState('');
    const[uEmail, setUEmail]= useState('');
    const[uPhone, setUPhone]= useState(0);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Please enter a valid email').required('Required'),
        phone: Yup.string().min(10, 'Please enter a valid phone number').required('Required'),
        password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Required')
    })

    const handleSubmit = async(values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        setUFirstName(values.firstName);
        setULastName(values.lastName);
        setUEmail(values.email);
        setUPhone(values.phone);

        if(values.password !== values.confirmPassword){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(values.email, values.password, values.firstName, values.lastName, Number(values.phone))
            history.push('/patient')
            
        } catch (error) {
            setError('Failed to create an account')
        } 

        setLoading(false)
    }


    useEffect(() => {
        if (currentUser!== null){
            // console.log({ name: ufirstName, last: ulastName, userEmail: uEmail, userPhone: Number(uPhone)});
            createUser(ufirstName, ulastName, uEmail, uPhone, String(currentUser.uid))
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]) 

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
            <Grid container component="main" > 
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    style={styles.signUpBG}
                />
                
                <Grid item xs={12} sm={8} md={5} component={Paper}>
                    <Box
                        sx={{
                        my: 0,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                    <Paper className={classes.paper} elevation={10} >
                        <Avatar className={classes.avatar}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h4" className={classes.signUpText}>
                            Sign up as a patient
                        </Typography>

                        {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}

                        <Formik 
                            initialValues={initialValues} 
                            onSubmit={handleSubmit} 
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
                                    <Grid item xs={12} sm={12}>
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
                                    <Grid item xs={12} sm={12}>
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
                                    <Grid item xs={12} sm={12}>
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
                                    <Grid item xs={12} sm={12}>
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
                                    disabled={loading}
                                    // disabled={props.isSubmitting}

                                >
                                    {loading ? 'Loading...': 'Sign Up' }
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                    <Link component={RouterLink} to="/login" variant="body2">
                                        Already have an account? Log In
                                    </Link>
                                    </Grid>
                                </Grid>
                                </Form>
                            )}
                        </Formik>
                        </Paper>
                        <Box mt={3}>
                            <Copyright />
                        </Box>
                    </Box>
                </Grid>    
            </Grid>
        </>
    )
}

export default Signup2
