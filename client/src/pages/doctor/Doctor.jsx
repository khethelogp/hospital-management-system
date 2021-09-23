import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { mainListItems, secondaryListItems } from './DoctorListItems';


function Doctor() {
    return (
        <>
            <Dashboard 
                title="Doctors Dashboard"
                mainListItems={mainListItems} 
                secondaryListItems={secondaryListItems}
            />
        </>
    )
}

export default Doctor
