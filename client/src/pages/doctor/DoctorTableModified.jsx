import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@material-ui/core';
import { Tooltip, Alert } from '@mui/material';
import * as MdIcons from 'react-icons/md';
import * as FcIcons from 'react-icons/fc';
import { useDB } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';
import { ConfirmDialog, Popup, Prescription } from '../../components';


import useStyles from './styles';

export default function StickyHeadTable(props) {
    const { columns, rows } = props;
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const { currentUser } = useAuth();
    const { cancelAppointment } = useDB();
    const [confirmDialog, setConfirmDialog] = React.useState({isOpen: false, title: '', subTitle: ''});
    const [openPopup, setOpenPopup] = React.useState(false);
    const [appointment, setAppointment] = React.useState({});

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleCancel = (id) => {
        setConfirmDialog({
            isOpen: true,
            title: 'Are you sure you want to cancel ?',
            subTitle: "You cannot undo this action",
            onConfirm: () => {onCancel(id)}
        });
    }

    const onCancel = async(id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        });

        try {
            setError('');
            setLoading(false);
            await cancelAppointment(id, currentUser.displayName || 'you');
        } catch (error) {
            setError('Failed to Cancel appointment');       
        }

        setLoading(false);
    }

return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={0}>
            
            {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}

            <TableContainer sx={{ maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table" className={classes.table}>
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                        <TableCell >
                            Action
                        </TableCell>

                        <TableCell align="end">
                            Prescribe 
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.name || row.id}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                            );
                            })}

                            <TableCell align="start">
                                {
                                    row.status === "active" 
                                    ?   <Tooltip title="Cancel Appointment">
                                            <Button 
                                                color="secondary" 
                                                onClick={() => handleCancel(row.id)}
                                            >
                                                <FcIcons.FcCancel className="reactIcon"/>
                                            </Button>
                                        </Tooltip>
                                    :   ""
                                }
                            </TableCell>
                            
                            <TableCell align="start">
                                {
                                    row.status === "active"
                                    ?   <Tooltip title="Attend to patient">
                                            <Button color="primary" disabled={loading}
                                            onClick={() => {
                                                setOpenPopup(true);
                                                setAppointment(row);
                                            }}
                                            >
                                                { loading 
                                                    ? 'loading...' 
                                                    : <MdIcons.MdHealing className="reactIcon"/>
                                                }
                                            </Button>
                                        </Tooltip>
                                    :   "" 
                                }
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>

            <ConfirmDialog 
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />

            <Popup title="Make a prescription" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <div>
                    <Prescription appointment={appointment} />
                </div>            
            </Popup>
        </>
    );
}