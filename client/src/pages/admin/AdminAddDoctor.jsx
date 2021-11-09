import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, TextField, MenuItem, Button, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDB } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from '@mui/material';

import useStyles from './styles';

const specializations = [
    "General",
    "Cardiologist",
    "Gynaecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist"
];

const initialValues = {
    drName: '',
    specialization: '',
    email: '',
    password: '',
    confirmPassword: '',
    roomNumber: '',
    showPassword: false,
}


const AdminAddDoctor = (props) => {
    const classes = useStyles();
    
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const { createNewDoctor } = useDB();
    const { drSignup } = useAuth();

    const validationSchema = Yup.object().shape({
        drName: Yup.string().required('Doctor name is required'),
        specialization: Yup.string().required('Please select a specialization'),
        email: Yup.string().email('Please enter a valid email').required('Required'),
        password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Required'),
        roomNumber: Yup.number().integer().typeError('Please enter a valid room number').required('Room number is required')
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async(values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
        
        try {
            setError('');
            setLoading(true);
            createNewDoctor(values.drName, values.specialization, values.email, values.password, Number(values.roomNumber));
            await drSignup(values.email, values.password, values.drName);
            setMessage('New Doctor account created successfuly.');
        } catch (error) {
            setError('Failed to create Doctor Account.')
        }

        setLoading(false);
    }

    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Add a doctor
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper className={classes.paperContent} elevation={5}>
                            <Typography variant="h3">
                                FORM
                            </Typography>

                            {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}
                            {message && <Alert severity="success" sx={{ my: 1, width:'100%' }} >{message}</Alert>}

                                <Formik 
                                    initialValues={initialValues} 
                                    autoComplete="off"
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit} 
                                >
                                    {(props) => (
                                        <Form className={classes.root}>
                                            <Grid container className={classes.container} >
                                                <Grid item xs={12} sm={12} md={6} lg={6}>      
                                                    <Field
                                                        as={TextField}
                                                        autoComplete="drName"
                                                        variant="outlined"
                                                        label="Doctor Name"
                                                        name="drName"
                                                        id="drName"
                                                        fullWidth
                                                        required
                                                        autoFocus
                                                        helperText={<ErrorMessage name="drName"/>}
                                                    />

                                                    <Field 
                                                        as={TextField}
                                                        variant="outlined"
                                                        label="Specialization"
                                                        name="specialization"
                                                        id="specialization"
                                                        select
                                                        fullWidth
                                                        helperText={<ErrorMessage name="specialization"/>}
                                                    >
                                                        {specializations.map((option) => (
                                                            <MenuItem key={option} value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        ))}
                                                    </Field>

                                                    <Field
                                                        as={TextField}
                                                        autoComplete="email"
                                                        variant="outlined"
                                                        label="Dr Email"
                                                        name="email"
                                                        id="email"
                                                        fullWidth
                                                        required
                                                        helperText={<ErrorMessage name="email"/>}
                                                    />

                                                </Grid>

                                                <Grid item xs={12} sm={12} md={6} lg={6}>
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

                                                    <Field
                                                        as={TextField}
                                                        autoComplete="roomNumber"
                                                        variant="outlined"
                                                        label="Room number"
                                                        name="roomNumber"
                                                        id="roomNumber"
                                                        fullWidth
                                                        required
                                                        helperText={<ErrorMessage name="roomNumber"/>}
                                                    />


                                                </Grid>
                                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        size="large"
                                                        sx={{ m: 2, my: 4 }}
                                                        disabled={loading}
                                                        // disabled={props.isSubmitting}
                                                    >
                                                        {loading ? "Loading..." : "Add Doctor" }  
                                                    </Button>
                                                </Grid>

                                            </Grid>    
                                        </Form>
                                    )}
                            </Formik>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AdminAddDoctor
