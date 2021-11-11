import React from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9)
    }
}))

function Notification(props) {

    const { notify, setNotify } = props;
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }

        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={2500}
            anchorOrigin={{vertical:'top', horizontal:'right'}}
            onClose={handleClose}
        >
            <Alert 
                severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification
