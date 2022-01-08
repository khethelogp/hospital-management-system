import React from 'react'
import { Button, Container, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import notFoundImg from '../../assets/404.gif';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Paper className={classes.paperContent} elevation={5}>
                    <Typography component="h1" variant="h4" color="primary">
                        Page Not found!
                    </Typography>   
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={notFoundImg} alt="page not found" />
                    </div>

                    <Button 
                        variant='outlined'
                        onClick={() => history.goBack()}
                    >
                        Go Back
                    </Button>

                </Paper>
            </Container>
        </>
    )
}

export default NotFound;
