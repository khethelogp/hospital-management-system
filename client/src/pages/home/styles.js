import { makeStyles } from '@material-ui/core/styles';
import bgImage from "../../assets/bg-5.jpg";

export default makeStyles((theme) => ({
    root: {
        
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        overflow: 'hidden',

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column', 
        },
    },
    /* home: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        // filter: 'blur(2px)',
    } */

}));
