import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ConfirmDialog } from '../../components' ;
import { useDB } from '../../contexts/DbContext';

import useStyles from './styles';

const AdminDeleteDoctor = (props) => {
    const classes = useStyles();
    
    const initialValues = {
        doctorID: '',
    }

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''});
    
    const { deleteDoctor } = useDB();
    
    const validationSchema = Yup.object().shape({
        doctorID: Yup.string().min(18, 'Please enter a valid ID').required('Required'),
    });

    const handleDelete = (values, props ) => {
        
        setConfirmDialog({
            isOpen: true,
            title: 'Are you sure to delete this record ?',
            subTitle: "You cannot undo this action!",
            onConfirm:  () => {onDelete(values.doctorID)}
        })
    }

    const onDelete =  async(id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        });

        try {
            setError('')
            setLoading(true)
            await deleteDoctor(String(id))
            setMessage('Successfully deleted doctor')
        } catch (error) {
            setError('Failed to delete doctor')
        }
        
        setLoading(false);
    }

    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography component="h1" variant="h4" color="primary">
                            Delete a doctor
                        </Typography>

                        {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}

                        {message && <Alert severity="info" sx={{ my: 1, width:'100%' }} >{message}</Alert>}

                        <Paper className={classes.paperContent} elevation={5}>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={handleDelete}
                                validationSchema={validationSchema}
                            >
                                {(props) => (
                                    <Form autoComplete="off">
                                        <Grid container>
                                            <Grid item xs={12} >
                                                <Field
                                                    as={TextField} 
                                                    variant="outlined"
                                                    label="Doctor ID"
                                                    name= "doctorID"
                                                    required
                                                    id="doctorID"
                                                    helperText={<ErrorMessage name="doctorID" />}
                                                    sx={{mt: 4}}
                                                />
                                            </Grid>
                                            
                                            <Grid item xs={12} >
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="error"
                                                    size="large"
                                                    disabled={loading}
                                                    sx={{mt: 4}}
                                                >
                                                    {loading ? "Loading ..." : "Delete Doctor"}
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

            <ConfirmDialog 
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />  
        </>
    )
}

export default AdminDeleteDoctor
