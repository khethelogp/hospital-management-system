import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, EventAvailable } from '@material-ui/icons';
import { Tooltip } from '@mui/material';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';


// TODO Add user icon and display username
export const mainListItems = (
    <div>
        
        <Tooltip title="Dashboard">
            <ListItem button component={Link} to="/admin/dashboard">
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Tooltip>
        
        <Tooltip title="Doctor List">
            <ListItem button component={Link} to="/admin/doctor-list">
                <ListItemIcon >
                    <FaIcons.FaUserNurse className="reactIcon" />
                </ListItemIcon>
                <ListItemText primary="Doctor List" />
            </ListItem>
        </Tooltip>

        <Tooltip title="Patient List">
            <ListItem button component={Link} to="/admin/patient-list">
                <ListItemIcon >
                    <FaIcons.FaUsers className="reactIcon" />
                </ListItemIcon>
                <ListItemText primary="Patient List" />
            </ListItem>
        </Tooltip>

        <Tooltip title="All Appointments">
            <ListItem button component={Link} to="/admin/all-appointments">
                <ListItemIcon >
                    <EventAvailable />
                </ListItemIcon>
                <ListItemText primary="Appointment Details" />
            </ListItem>
        </Tooltip>

        <Tooltip title="Prescriptions List">
            <ListItem button component={Link} to="/admin/all-prescriptions">
                <ListItemIcon >
                    <GiIcons.GiPill className="reactIcon" />
                </ListItemIcon>
                <ListItemText primary="Prescriptions List" />
            </ListItem>
        </Tooltip>

        <Tooltip title="Add Doctor">
            <ListItem button component={Link} to="/admin/add-doctor">
                <ListItemIcon >
                    <FaIcons.FaUserPlus className="reactIcon" />
                </ListItemIcon>
                <ListItemText primary="Add Doctor" />
            </ListItem>
        </Tooltip>

        <Tooltip title="Delete Doctor">
            <ListItem button component={Link} to="/admin/delete-doctor">
                <ListItemIcon >
                    <FaIcons.FaUserTimes className="reactIcon" />
                </ListItemIcon>
                <ListItemText primary="Delete Doctor" />
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