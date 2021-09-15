import React,{ useState } from 'react';
import UserForm from './UserForm';
import { Navbar } from '../../components';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import PageHeader from '../../components/PageHeader/PageHeader';
import useTable from '../../components/Controls/useTable';
import * as userService from '../../services/userService';
import Controls from '../../components/Controls/Controls';
import Popup from '../../components/Popup/Popup';
import {  Search, VerifiedUser, Add, EditOutlined, Close } from '@material-ui/icons';
import Notification from '../../components/Notfication/Notification'; 
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';

// import * as GrIcons from 'react-icons/gr';

import useStyles from './styles';

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'department', label: 'Daparment' },
    { id: 'actions', label: 'Actions', disableSorting: true}
]

const Admin = ({}) => {
    const classes = useStyles();

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(userService.getAllUsers());
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup]= useState(false);
    const [notify, setNotify]= useState({isOpen: false, message: '', type:''});
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''});

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items
                else
                    return items.filter(x => x.fullName.includes(target.value))
            }
        })
    }

    const addOrEdit = (user, resetForm) => {
        if(user.id === 0)
            userService.insertUser(user)
            else
            userService.updateUser(user)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(userService.getAllUsers());
        setNotify({
            isOpen: true,
            message: 'Submitted successfuly',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        userService.deleteUser(id);
        setRecords(userService.getAllUsers());
        setNotify({
            isOpen: true,
            message: 'Deleted successfuly',
            type: 'error'
        })
        
    }

    return (
        <>  
            <Navbar />
            <PageHeader
                title="Admin"
                subTitle="Administrator"
                icon={<VerifiedUser fontSize="large" />}
            />

            <Paper className={classes.pageContent} >
                <Toolbar>
                    <Controls.Input
                        label="Search User"
                        className={classes.searchInput}
                        sm={12}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch} 
                    />
                    <Controls.Button 
                        text="New"
                        variant="outlined"
                        startIcon={<Add /> }
                        sm={12}
                        className={classes.newButton}
                        onClick={() => {setRecordForEdit(null); setOpenPopup(true);}}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                        onClick={() => {openInPopup(item)}}
                                    >
                                        <EditOutlined fontSize="small" />
                                    </Controls.ActionButton>
                                    <Controls.ActionButton
                                        color="secondary"
                                        onClick={() => {
                                            setConfirmDialog({
                                                isOpen: true,
                                                title: 'Are you sure to delete this record ?',
                                                subTitle: "You can't undo this action",
                                                onConfirm:  () => {onDelete(item.id)}
                                            })
                                        }}
                                    >
                                        <Close fontSize="small"/>
                                    </Controls.ActionButton>
                                </TableCell>
                            </TableRow>))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="User Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <UserForm 
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog 
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />  
        </>
    )
}

export default Admin
