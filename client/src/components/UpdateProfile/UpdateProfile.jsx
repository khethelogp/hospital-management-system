import React,{ useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Box, Typography, Container, InputAdornment, IconButton } from '@material-ui/core';
import useStyles from './styles';
import Copyright from '../Copyright/Copyright';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { VisibilityOff, Visibility, AccountCircle  } from '@material-ui/icons';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from '@mui/material';

const UpdateProfile = () => {

    const  classes = useStyles();
    
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    }

    const [values, setValues] = useState(initialValues);
    const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').required('Required'),
        password: Yup.string().min(6, 'Password must be atleast 6 characters').required(false),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required(false)
    })

    const handleSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        if(values.password !== values.confirmPassword){
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if(values.email !== currentUser.email){
            promises.push(updateUserEmail(values.email))
        }

        if(values.password){
            promises.push(updateUserPassword(values.password))
        }

        Promise.all(promises).then(() => {
            history.push('/patient')    
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

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
                        <AccountCircle />
                    </Avatar>
                    <Typography component="h1" variant="h4" className={classes.signUpText}>
                        Update Account
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
                                    fullWidth
                                    name="password"
                                    label="(Password) Leave blank to keep the same"
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
                            >
                                {loading ? 'Loading...': 'Update Profile' }
                            </Button>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                <Link component={RouterLink} to="/patient" variant="body2">
                                    Back to dashboard
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
        </>
    )
}

export default UpdateProfile
