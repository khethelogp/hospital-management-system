import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons/';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';
import Copyright from '../Copyright/Copyright';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';


const ForgotPassword = () => {
    const  classes = useStyles();

    const initialValues = {
        email: '',
    }

    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').required('Required'),
    })

    const handleSubmit = async(values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(values.email)
            setMessage('Check your inbox for further instructions.')            
        } catch (error) {
            setError('Failed to Reset Password')
        } 

        setLoading(false)
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper} elevation={10}>
                    <Avatar className={classes.avatar}>
                        <LockOpenOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Password Reset
                    </Typography>

                    {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}
                    {message && <Alert severity="info" sx={{ my: 1, width:'100%' }} >{message}</Alert>}
                    
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
                                    {loading ? "Loading..." : "Reset Password" }  
                                </Button>
                                        
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Link component={RouterLink} to="/login" variant="body2" >
                                            {`Login instead?`}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Link component={RouterLink} to="/signup" variant="body2">
                                            {"Need an account? Sign Up"}
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

export default ForgotPassword

