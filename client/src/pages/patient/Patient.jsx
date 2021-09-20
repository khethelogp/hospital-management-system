import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import PatientDashboard from './PatientDashboard'

const Patient = () => {
    return (
        <>
            <Dashboard 
                title="Patient Dashboard"
                children={<PatientDashboard />}
            /> 
        </>
    )
}
export default Patient
