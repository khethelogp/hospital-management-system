import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, EventAvailable } from '@material-ui/icons';
import { Tooltip } from '@mui/material';
import * as GiIcons from 'react-icons/gi';


// TODO Add user icon and display username
export const mainListItems = (
    <div>
        
        <Tooltip title="Dashboard">
            <ListItem button component={Link} to="/doctor/dashboard">
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Tooltip>
        
        <Tooltip title="Appointments">
            <ListItem button component={Link} to="/doctor/appointments">
                <ListItemIcon >
                    <EventAvailable />
                </ListItemIcon>
                <ListItemText primary="Appointments" />
            </ListItem>
        </Tooltip>

        <Tooltip title="Prescriptions">
            <ListItem button component={Link} to="/doctor/prescriptions">
                <ListItemIcon >
                    <GiIcons.GiPlagueDoctorProfile className="reactIcon" />
                </ListItemIcon>
                <ListItemText primary="Prescriptions" />
            </ListItem>
        </Tooltip>

    </div>
);

/* export const secondaryListItems = (
    <div>
        <Tooltip title="Logout">
            <ListItem button className="flex-end">
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
            </ListItem>
        </Tooltip>
    </div>
);
 */