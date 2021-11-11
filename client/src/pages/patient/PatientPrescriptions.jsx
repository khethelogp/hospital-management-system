import PatientTable from './PatientTable';
import { Container, Grid, Typography, Paper} from '@mui/material';

import useStyles from './styles';

function createData(name, appointmentDate, disease, medication) {
    return { name, appointmentDate, disease, medication};
}

const rows = [
    createData('Dr. Smith', '2021-11-22', 'Flu', 'Paracetamol'),
    createData('Dr. Chan', '2021-11-22', 'Sore tummy', 'Paracetamol'),
    createData('Dr. Noorbai', '2021-11-22', 'Flu', 'Paracetamol'),
    createData('Dr. Smith', '2021-11-22', 'Cold', 'Vitamin C'),
    
];

const columns = [
    { id: 'name', label: 'Doctor Name', minWidth: 150 },
    { id: 'appointmentDate', label: 'Appointment Date', minWidth: 170 },
    { id: 'disease', label: 'Sickness', minWidth: 170 },
    { id: 'medication', label: 'Medication', minWidth: 170 },
];


const PatientPrescriptions = () => {
    const  classes = useStyles();
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Prescriptions
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <PatientTable columns={columns} rows={rows} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container> 
        </>
    )
}

export default PatientPrescriptions
