import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, makeStyles, IconButton } from '@material-ui/core';
import Controls from '../Controls/Controls';
import { NotListedLocation } from '@material-ui/icons';

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
        justifyContent: 'center'
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
    }
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
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button 
                    text="No"
                    color="default" 
                    onClick={()=> setConfirmDialog({...confirmDialog, isOpen: false})}
                />
                <Controls.Button 
                    text="Yes"
                    color="secondary" 
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
