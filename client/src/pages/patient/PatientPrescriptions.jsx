import PatientTable from './PatientTable';
import { Container, Grid, Typography, Paper} from '@mui/material';
import { useDB } from '../../contexts/DbContext';

import useStyles from './styles';

const columns = [
    { id: 'doctorName', label: 'Doctor Name', minWidth: 150 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'disease', label: 'Sickness', minWidth: 170 },
    { id: 'medication', label: 'Prescription', minWidth: 170 },
];


const PatientPrescriptions = () => {
    const  classes = useStyles();

    const { userPrescriptions } = useDB();

    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Prescriptions
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <PatientTable columns={columns} rows={userPrescriptions} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container> 
        </>
    )
}

export default PatientPrescriptions
