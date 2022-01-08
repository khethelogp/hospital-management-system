import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
    paperContent: {
        margin: theme.spacing(3, 0),
        padding: theme.spacing(3),
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    imageContainer: {
        // height:'250px', 
        overflow:'hidden', 
        margin: theme.spacing(3, 0),
    },
    image: {
        width: '100%',
    }

}))