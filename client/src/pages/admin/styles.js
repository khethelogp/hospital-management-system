import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2)
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))