import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core';
import { Assignment, BarChart, Dashboard, EventAvailable, ExitToApp, History} from '@material-ui/icons';
import { Tooltip } from '@mui/material';

// TODO Add user icon and display username
export const mainListItems = (
    <div>
        <Tooltip title="Dashboard">
            <ListItem button component={Link} to="/patient/dashboard">
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Tooltip>

        <Tooltip title="Appointments">
            <ListItem button component={Link} to="/patient/appointments">
                <ListItemIcon>
                    <EventAvailable />
                </ListItemIcon>
                <ListItemText primary="Appointments" />
            </ListItem>
        </Tooltip>
        
        <Tooltip title="History" component={Link} to="/patient/appointment-history">
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
