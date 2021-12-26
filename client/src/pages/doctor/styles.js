import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
        }
    },
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    card:{
        minWidth: '275px',
        
    },
    cardIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        padding: theme.spacing(2),
        color:'#000',
        // color:'#3c44b1',
    },
    cardTitle: {
        textAlign: 'center',
        padding: theme.spacing(2,0),
        
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    },
    cardActions: {
        flex: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '1rem 0',
    },
    paperContent: {
        margin: theme.spacing(5, 0),
        padding: theme.spacing(3),
    },
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            // cursor: 'pointer'
        },
    },
    success: {
        backgroundColor: '#4caf50',
        color: '#fff',
        textTransform: 'capitalize',
    }
    

}));
