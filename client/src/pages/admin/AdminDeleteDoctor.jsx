import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, TextField, MenuItem, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import useStyles from './styles';

const specializations = [
    "Nothing Selected", 
    "General", 
    "Cardiologist", 
    "Gynaecologist", 
    "Dermatologist", 
    "Pediatrician", 
    "Neurologist" 
];

const roomNumbers = [ "1", "2", "3", "6" ];

const AdminDeleteDoctor = (props) => {
    const[room, setRoom] = useState(0);

    const classes = useStyles();
    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
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
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{m: 2}}
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
