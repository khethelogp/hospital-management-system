import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, consultancyFee, appointmentDate, appointmentTime) {
    return { name, consultancyFee, appointmentDate, appointmentTime};
}

//TODO can use useTable Component that's already created

const date = new Date();
const appointmentDate =  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const time  = `${date.getHours()}:${date.getMinutes()} `

const rows = [
    createData('Dr. Smith', 159, appointmentDate, time),
    createData('Dr. Magagula', 237, appointmentDate, time),
];


const PatientTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Doctor</TableCell>
                    <TableCell align="right">Consultancy Fee</TableCell>
                    <TableCell align="right">Appointment Date</TableCell>
                    <TableCell align="right">Appointment Time</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.consultancyFee}</TableCell>
                        <TableCell align="right">{row.appointmentDate}</TableCell>
                        <TableCell align="right">{row.appointmentTime}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PatientTable;
