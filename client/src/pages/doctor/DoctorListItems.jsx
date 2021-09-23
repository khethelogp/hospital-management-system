import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { Assignment, BarChart, Dashboard, EventAvailable, ExitToApp, History, Layers, People, ShoppingCart } from '@material-ui/icons';
import { Tooltip } from '@mui/material';



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

    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        
        <Tooltip title="Current Month">
            <ListItem button>
                <ListItemIcon>
                    <Assignment />
                </ListItemIcon>
                <ListItemText primary="Current month" />
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
