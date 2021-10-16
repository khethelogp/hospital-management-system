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

const roomNumbers = [ "1", "2", "3", "4" ];

const AdminAddDoctor = (props) => {
    const[room, setRoom] = useState(0);

    const classes = useStyles();
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
                            <form className={classes.root}> 
                                <Grid Container className={classes.container} >
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <TextField 
                                            variant="outlined"
                                            label="Doctor Name"
                                            name= "drName"
                                            id="drName"
                                            fullWidth
                                            required
                                            // value={drName}
                                            // onChange={handleInputChange}
                                            helperText="Doctor name is required"
                                        />

                                        <TextField 
                                            variant="outlined"
                                            label="Specialization"
                                            name="specialization"
                                            id="specialization"
                                            select
                                            fullWidth
                                            required
                                            // value={specialization}
                                            // onChange={handleInputChange}
                                            helperText="Please select a specialization"
                                        >
                                            {specializations.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField 
                                            variant="outlined"
                                            label="Email ID"
                                            name= "email"
                                            id="email"
                                            fullWidth
                                            required
                                            // value={email}
                                            // onChange={handleInputChange}
                                            helperText="Doctor email is required"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <TextField 
                                            variant="outlined"
                                            label="Password"
                                            name= "password"
                                            id="password"
                                            type="password"
                                            fullWidth
                                            required
                                            // value={password}
                                            // onChange={handleInputChange}
                                            helperText="Please provide password"
                                        />
                                        <TextField 
                                            variant="outlined"
                                            label="Confirm Password"
                                            name= "confirmPassword"
                                            id="confirmPassword"
                                            type="password"
                                            fullWidth
                                            required
                                            // value={password}
                                            // onChange={handleInputChange}
                                            helperText="Password does not match"
                                        />

                                        <TextField 
                                            variant="outlined"
                                            label="Room Number"
                                            name= "roomNumber"
                                            id="roomNumber"
                                            select
                                            fullWidth
                                            required
                                            // value={password}
                                            // onChange={handleInputChange}
                                            helperText="Please select a room number"
                                        >
                                            {roomNumbers.map((room) => (
                                                <MenuItem key={room} value={room}>
                                                    {room}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            sx={{m: 2}}
                                        >
                                            Add Doctor
                                        </Button>
                                    </Grid>

                                </Grid>            
                            </form>    
                        </Paper>
                    </Grid>
                </Grid>
            </Container>  
        </>
    )
}

export default AdminAddDoctor
