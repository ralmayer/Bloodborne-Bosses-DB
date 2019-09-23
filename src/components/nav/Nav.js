import React, { useState } from 'react'
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
                Logo
            </div>
            <DesktopLinks />
            <MobileLinks status={state}/>
            <BurgerButton toggleClass={toggleClass}/>
        </div >
    )

}

export default Nav