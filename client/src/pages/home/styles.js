import { makeStyles } from '@material-ui/core/styles';
import bgImage from "../../assets/bg-5.jpg";

export default makeStyles((theme) => ({
    home: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        // filter: 'blur(2px)',
    },
    
    

}));
