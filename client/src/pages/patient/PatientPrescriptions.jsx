import PatientTable from './PatientTable';
import { Container, Grid, Typography, Paper} from '@mui/material';

import useStyles from './styles';

const PatientPrescriptions = () => {
    const  classes = useStyles();
    return (
        <>
            <Container  className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                        <Typography component="h1" variant="h4" color="primary">
                            Prescriptions
                        </Typography>
                        <Paper className={classes.paperContent} elevation={5} >    
                            <PatientTable />
                        </Paper>
                    </Grid>
                </Grid>
            </Container> 
        </>
    )
}

export default PatientPrescriptions
