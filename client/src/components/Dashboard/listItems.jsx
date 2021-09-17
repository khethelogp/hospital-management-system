import { ListItem, ListItemIcon, ListItemText, ListSubheader, Tooltip, Typography } from '@material-ui/core';
import { AccountCircle, Assignment, BarChart, Dashboard, DateRange, EventAvailable, EventNote, ExitToApp, History, Info, Layers, People, ShoppingCart } from '@material-ui/icons';
import * as React from 'react';


// TODO Add user icon and display username
export const mainListItems = (
    <div>
        
        <Tooltip title="Dashboard">
        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        </Tooltip>

        <Tooltip title="Appointments">
        <ListItem button>
            <ListItemIcon>
                <EventAvailable />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
        </ListItem>
        </Tooltip>
        
        <Tooltip title="Medical history">
        <ListItem button>
            <ListItemIcon>
                <History />
            </ListItemIcon>
            <ListItemText primary="History" />
        </ListItem>
        </Tooltip>

        <Tooltip title="Reports">
        <ListItem button>
            <ListItemIcon>
                <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        </Tooltip>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>

        <Tooltip title="Current month">
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        </Tooltip>

        <Tooltip title="Info">
        <ListItem button>
            <ListItemIcon>
                <Info />
            </ListItemIcon>
            <ListItemText primary="Info" />
        </ListItem>
        </Tooltip>
        
        <Tooltip title="Logout">
        <ListItem button>
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
        </Tooltip>
    
    </div>
);