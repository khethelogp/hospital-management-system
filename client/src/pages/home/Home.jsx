import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Tooltip, IconButton, Grid, Box } from '@mui/material';
// import * as GiIcons from 'react-icons/gi';
import {  Grid, Box } from '@mui/material';


import useStyles from './styles';
import Login2 from '../../components/userAuth/Login/Login2';
import Copyright from '../../components/Copyright/Copyright';
import { CssBaseline } from '@material-ui/core';

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            {/* <AppBar position="static" > 
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ marginRight: '20px',}}
                    >
                        <Tooltip title="Home">
                            <GiIcons.GiHospital />
                        </Tooltip>
                    </IconButton>

                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        align='start'
                        noWrap
                        sx={{ flexGrow: 1 }}
                        >
                        HMS
                    </Typography>

                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About US</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>  */}

            <div className={classes.root}>
                <Grid container component="main" className={classes.main}>
                    <Grid item xs={12}>
                        <Login2 />
                    </Grid>

                </Grid>

                <Box mt={6}>
                    <Copyright />
                </Box>       
            </div>

        </>
    )
}

export default Home
