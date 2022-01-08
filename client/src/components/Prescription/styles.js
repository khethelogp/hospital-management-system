import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '100%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    },
    root: {
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
        },
    },
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
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
        margin: theme.spacing(3, 0),
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
            cursor: 'pointer'
        },
    },
    button: {
        margin: theme.spacing(5, 2)
    }
    
}));