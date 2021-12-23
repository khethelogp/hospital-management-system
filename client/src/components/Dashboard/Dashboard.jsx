import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { AccountCircle, ChevronLeft, ExitToApp, Menu, Notifications } from '@material-ui/icons';
import { Badge, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import { secondaryListItems } from './listItems';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from '@mui/material';
import { ConfirmDialog, Notification, Popup } from '../index';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://khethelogp.com" target="blank">
          KhetheloGP 🌵
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    type: "dark"
  }
});

const DashboardContent = ({ title, children, mainListItems }) => {
  
  const [error, setError] = React.useState('')
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const [confirmDialog, setConfirmDialog] = React.useState({isOpen: false, title: '', subTitle: ''});
  const [openPopup, setOpenPopup]= React.useState(false);
  const [notify, setNotify]= React.useState({isOpen: false, message: '', type:''});

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = async() => {
      setConfirmDialog({
        isOpen: true,
        title: 'You are logging out!',
        subTitle: "Are you sure you want to exit the app?",
        onConfirm:  () => {onLogout()}
      })
  }

  const onLogout = async() => {
    setError('');
      try {
          await logout()
          history.push('/login')
      } catch (error) {
          setError('Failed to logout')
      }
  }

  const handleClickNotification = () => {
    /* setNotify({
      isOpen: true,
      message: 'Notifications coming soon! 😃',
      type: 'info'
    }); */
    setOpenPopup(true);
    setTimeout(function () {
      setOpenPopup(false);
    }, 3000);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <Tooltip title="Menu">
                <Menu />
              </Tooltip>
            </IconButton>
            
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              align='center'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
              
            <IconButton color="inherit" onClick={handleClickNotification}>
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>

            {/* <IconButton 
              color="inherit"
              onClick={handleLogout}
            >
              <Tooltip title="Log Out">
                <ExitToApp />
              </Tooltip>
            </IconButton> */}

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
          
          <List sx={{mt: 'auto' }}>
            <Tooltip title="Account">
                <ListItem button className="flex-end">
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary={currentUser.displayName || currentUser.email} />
                </ListItem>
            </Tooltip>
          </List>
          
          <List >
            <Tooltip title="Logout">
              <ListItem button className="flex-end" onClick={handleLogout}>
                  <ListItemIcon>
                      <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary="Logout"/>
              </ListItem>
            </Tooltip>
          </List>

        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {error && <Alert severity="error" sx={{ my: 1, width:'100%' }} >{error}</Alert>}
              {children}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>

      <ConfirmDialog 
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
      />

      <Notification 
          notify={notify}
          setNotify={setNotify}
      />

            <Popup
                title="Notifcations"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Typography variant="h3">
                  Notifications coming soon! 😃
                </Typography>
            </Popup>

    </ThemeProvider>
  );
}

export default function Dashboard({title, children, mainListItems}) {

  return(
    <DashboardContent 
      title={title} 
      children={children} 
      mainListItems={mainListItems} 
    />
  ) 

}