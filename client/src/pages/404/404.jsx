import React from 'react'
import { Container, Typography } from '@mui/material';
import useStyles from './styles';

const NotFound = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Typography component="h1" variant="h3" color="primary">
                    404 Page Not found!
                </Typography>   
            </Container>
        </>
    )
}

export default NotFound;
