import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MobileLinks from './MobileLinks';
import DesktopLinks from './DesktopLinks';
import BurgerButton from './BurgerButton';

const Nav = () => {
    const [state, setState] = useState(false);

    const toggleClass = () => {
        setState(!state)
        console.log(state)
    }

    return (
        <div id='nav'>
            <div id='logo'>
            <NavLink to='/credits' style={{textDecoration: 'none', color: 'white'}}>祝福する</NavLink>
            </div>
            <DesktopLinks />
            <MobileLinks status={state} />
            <BurgerButton toggleClass={toggleClass} />
        </div >
    )

}

export default Nav