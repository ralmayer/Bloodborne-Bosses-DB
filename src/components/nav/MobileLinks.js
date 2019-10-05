import React from 'react'
import { NavLink } from 'react-router-dom';

const MobileLinks = ({ status }) =>
    <ul className={status ? 'nav-links-mobile' : 'nav-disabled'}>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/bosses'><li>Bosses</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
    </ul>


export default MobileLinks