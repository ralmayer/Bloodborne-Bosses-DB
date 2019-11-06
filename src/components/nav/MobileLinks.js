import React, { useContext, Fragment } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { NavLink } from 'react-router-dom';
import firebase from '../firebase'

const MobileLinks = ({ status }) => {

    const { authStatus, setAuthStatus } = useContext(AuthContext)
    
    async function logout() {
        await firebase.logout()
        setAuthStatus(false)
    }

    return (
        <ul className={status ? 'nav-links-mobile' : 'nav-disabled'}>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/bosses'><li>Bosses</li></NavLink>
            {authStatus ? <>
                <NavLink to='/profile'>
                    <li>
                        Profile
                    </li>
                </NavLink>
                <a href='#'>
                    <li onClick={() => {
                        logout()
                    }
                    }>
                        Logout
                </li>

                </a>
            </> :
            <Fragment>
                <NavLink to='/login'>
                    <li>
                        Login
                    </li>
                </NavLink>

                <NavLink to='/register'>
                    <li>
                        Register
                    </li>
                </NavLink>
            </Fragment>}
        </ul>
    )
}


export default MobileLinks