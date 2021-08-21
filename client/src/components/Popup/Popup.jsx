import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'

function Popup(props) {

    const { title, message, children, openPopup, setOpenPopup } = props;
 
    return (
        <Dialog open={openPopup} >
            <DialogTitle>
                <div>{title}</div>
            </DialogTitle>
            <DialogContent>
                <div>
                    {message}
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Popup
