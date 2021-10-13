import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, roomNumber, appointmentDate, appointmentTime, status) {
    return { name, roomNumber, appointmentDate, appointmentTime, status};
}

//TODO can use useTable Component that's already created

// Converting javascript timestamps to normal time
function getNormalTime(unixTimestamp){
    let date = new Date(unixTimestamp * 1000);
    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2); 
    let time = `${hours}:${minutes}`;
    return time;
}


const date = new Date();
const appointmentDate =  `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const time  = getNormalTime(date.getTime());

const rows = [
    createData('Dr. Smith', 159, appointmentDate, time, "active"),
    createData('Dr. Magagula', 237, appointmentDate, time, "not active"),
];



const PatientTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Doctor</TableCell>
                    <TableCell align="right">Room Number</TableCell>
                    <TableCell align="right">Appointment Date</TableCell>
                    <TableCell align="right">Appointment Time</TableCell>
                    <TableCell align="right">Current Status</TableCell>
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
                        <TableCell align="right">{row.roomNumber}</TableCell>
                        <TableCell align="right">{row.appointmentDate}</TableCell>
                        <TableCell align="right">{row.appointmentTime}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PatientTable;
