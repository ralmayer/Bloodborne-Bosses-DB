import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import firebase from '../firebase'
import { NavLink } from 'react-router-dom';
import MobileLinks from './MobileLinks';
import DesktopLinks from './DesktopLinks';
import BurgerButton from './BurgerButton';

const Nav = () => {

    const { authStatus, setAuthStatus } = useContext(AuthContext)

    const [state, setState] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => setIsInitialized(authStatus), [authStatus])

    const toggleClass = () => {
        setState(!state)
        console.log(state)
    }

    return (
        <div id='nav'>
            <div id='logo'>
            <NavLink to='/credits' style={{textDecoration: 'none', color: 'white'}}>祝福する</NavLink>
            </div>
            <DesktopLinks isInitialized={isInitialized}/>
            <MobileLinks status={state} isInitialized={isInitialized}/>
            <BurgerButton toggleClass={toggleClass} />
        </div >
    )

}

export default Nav