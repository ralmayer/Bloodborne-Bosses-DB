import React from 'react'
import { NavLink } from 'react-router-dom'; 

const MobileLinks = ({status}) => 
    <ul className={status ? 'nav-links-mobile' : 'nav-disabled'}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bosses'>Bosses</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </ul>


export default MobileLinks