import React from 'react';
import { Navbar } from '../components';

function Home(props) {
    const { handleLogout } = props;
    return (
        <>
            <Navbar handleLogout={handleLogout} />
            <div className="home">
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home
