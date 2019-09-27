import React from 'react'
import { NavLink } from 'react-router-dom'; 

const DesktopLinks = () => 
    <ul id='nav-links'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bosses'>Bosses</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </ul>


export default DesktopLinks