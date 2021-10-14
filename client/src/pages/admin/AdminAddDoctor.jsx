import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, TextField, MenuItem } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import useStyles from './styles';

const doctors = [
    { name: "Dr. Smith", specialzation: "General", room: 135},
    { name: "Dr. Hughes", specialzation: "Cardiologist", room: 125},
    { name: "Dr. Magagula", specialzation: "Gynaecologist", room: 120},
    { name: "Dr. Nkosi", specialzation: "Dermatologist", room: 115},
    { name: "Dr. Strange", specialzation: "Pediatrician", room: 105},
    { name: "Dr. Noorbai", specialzation: "Neurologist", room: 140},
]

const AdminAddDoctor = (props) => {
    const[room, setRoom] = useState(0);

    const classes = useStyles();
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Add a doctor
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper className={classes.paperContent} elevation={5}>
                            <form className={classes.root}> 
                                <Grid Container>
                                    <Grid item xs={12} lg={6}>
                                        <TextField 
                                            variant="outlined"
                                            label="Specialization"
                                            name="specialization"
                                            id="specialization"
                                            select
                                            fullWidth
                                            // value={values.specialzation}
                                            // onChange={handleInputChange}
                                            helperText="Please select a specialization"
                                        >
                                            {doctors.map((option) => (
                                                <MenuItem key={option.specialzation} value={option.specialzation}>
                                                {option.specialzation}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField 
                                            variant="outlined"
                                            label="Doctor"
                                            name="doctor"
                                            id="doctor"
                                            select
                                            fullWidth
                                            // value={values.doctor}
                                            onChange={()=>{}}
                                            helperText="Please select a Doctor"
                                        >
                                            {doctors.map((option) => (
                                                <MenuItem key={option.name} value={option.name}>
                                                {option.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField 
                                            variant="outlined"
                                            //label={fee ? fee : "Consultancy Fee" } 
                                            label={room ? room : "Room Number"}
                                        // name="consultancyFee"
                                            name= "room number"
                                            //id="consultancyFee"
                                            id="room number"
                                            disabled
                                            color="secondary"
                                        />
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
