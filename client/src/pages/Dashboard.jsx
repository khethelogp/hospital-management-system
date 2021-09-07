import React from 'react'
import Home from './Home'

const Dashboard = ({handleLogout}) => {
    return (
        <>
            <Home handleLogout={handleLogout} />         
        </>
    )
}

export default Dashboard
