import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, makeStyles, IconButton } from '@material-ui/core';
// import Controls from '../Controls/Controls';
import { NotListedLocation } from '@material-ui/icons';
import { Button } from '@mui/material';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'space-between'
    }, 
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    },
    
}))

function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();

    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6" align="center" gutterBottom>
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2" align="center">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Button
                    variant="contained"
                    size="large"
                    color="inherit"
                    fullWidth
                    onClick={()=> setConfirmDialog({...confirmDialog, isOpen: false})}
                >
                    No
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    color="error"
                    fullWidth
                    onClick={confirmDialog.onConfirm}
                >
                    Yes
                </Button>

                {/* <Controls.Button 
                    text="No"
                    color="default" 
                    onClick={()=> setConfirmDialog({...confirmDialog, isOpen: false})}
                />
                <Controls.Button 
                    text="Yes"
                    color="secondary" 
                    onClick={confirmDialog.onConfirm}
                /> */}
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
