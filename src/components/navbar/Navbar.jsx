import React from 'react';

import './css/navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='login' className="navbar__login">login</NavLink>
            <NavLink to='reg' className="navbar__regist">registration</NavLink>
        </div>
    );
};

export default Navbar;