import { ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import { AccountCircle, Assignment, BarChart, Dashboard, DateRange, EventAvailable, EventNote, ExitToApp, History, Layers, People, ShoppingCart } from '@material-ui/icons';
import * as React from 'react';


// TODO Add user icon and display username
export const mainListItems = (
    <div>
        {/* <ListItem >
            <ListItemIcon>
                <AccountCircle />
            </ListItemIcon>
            <ListItemText secondary="Logged in as" />
        </ListItem>

        <ListItem>
            <Typography variant="subtitle2" align="center">
                Patient username
            </Typography>
        </ListItem> */}

        {/* <div className="loggedInUser">
            <AccountCircle />
            <Typography variant="subtitle2" align="center">
                Logged in as
            </Typography>
        </div> */}

        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <EventAvailable />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
        </ListItem>
        
        <ListItem button>
            <ListItemIcon>
                <History />
            </ListItemIcon>
            <ListItemText primary="History" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>

    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Logout" />
        </ListItem>
    
    </div>
);
