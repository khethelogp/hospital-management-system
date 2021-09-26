import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    }

}));
