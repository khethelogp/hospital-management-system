import React, { useState }  from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

import './Navbar.css';

// TODO implement popup when login out 

function Navbar(props) {
    const { handleLogout } = props;
    const [sidebar, setSidebar] = useState(false)
    // const [openPopup, setOpenPopup] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/> 
                </Link>
                <Link to="#" className='logout' title="Logout">
                    <BiIcons.BiExit 
                        onClick={handleLogout}
                    /> 
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active ' : 'nav-menu' }>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <div className="loggedInAs">
                        <p>Logged in as: </p>
                        <h3>username</h3>
                    </div>
                    {/* maps all sidebar links */}
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link> 
                            </li>
                        )
                    })}                
                </ul>
            </nav>
            </IconContext.Provider>  
        </>
    )
}

export default Navbar
