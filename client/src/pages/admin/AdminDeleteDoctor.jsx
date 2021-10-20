import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

import useStyles from './styles';

const AdminDeleteDoctor = (props) => {
    
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography component="h1" variant="h4" color="primary">
                            Delete a doctor
                        </Typography>
                    
                        <TextField 
                            variant="outlined"
                            label="Doctor ID"
                            name= "drID"
                            id="drID"
                            fullWidth
                            required
                            // value={drName}
                            // onChange={handleInputChange}
                            helperText="Doctor ID is required"
                            sx={{mt: 4}}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{mt: 2}}
                        >
                            Delete Doctor
                        </Button>
                    </Grid>

                </Grid>
            </Container>  
        </>
    )
}

export default AdminDeleteDoctor
