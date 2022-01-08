import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Alert from '@mui/material/Alert';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import { useDB } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';
import { ConfirmDialog } from '../../components';


export default function StickyHeadTable(props) {
    const { columns, rows } = props;
    const classes = useStyles();

    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { cancelAppointment } = useDB();
    const [confirmDialog, setConfirmDialog] = React.useState({isOpen: false, title: '', subTitle: ''});
    const { currentUser } = useAuth();
        
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
            title: 'Are you sure you want to cancel your appointment?',
            subTitle: "You cannot undo this action, If you cancel you'll have to reschedule",
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
                                    { row.status === "active" 
                                        ?  <Button 
                                                color="secondary" variant="contained" 
                                                disabled={loading}
                                                onClick={() => {handleCancel(row.id)}}
                                            >   
                                                {loading ? "Loading..." : "Cancel"}    
                                            </Button>
                                        :  ""
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

        </>
    );
}