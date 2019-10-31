import React, { useContext, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import firebase from '../firebase'

const DesktopLinks = () => {

    async function logout() {
        await firebase.logout()
    }

    return (
        <ul id='nav-links'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/bosses'>Bosses</NavLink></li>
            {firebase.getCurrentUser() ? <Fragment>
                <li>
                    <NavLink to='/profile'>
                    Profile
                    </NavLink>
                </li>

                <a href='#'>
                    <li onClick={() => {
                        logout()
                    }
                    }>
                        Logout
                </li>
                </a>
            </Fragment> :
                <Fragment>
                    <li>
                        <NavLink to='/login'>
                            Login
                    </NavLink>
                    </li>

                    <li>
                        <NavLink to='/register'>
                            Register
                    </NavLink>
                    </li>
                </Fragment>}
        </ul>)
}

export default DesktopLinks