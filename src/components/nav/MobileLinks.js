import React, { useContext, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'
import firebase from '../firebase'

const MobileLinks = ({ status }) => {
    const { user, setUser } = useContext(AuthContext)

    async function logout() {
        await firebase.logout()
    }

    return (
        <ul className={status ? 'nav-links-mobile' : 'nav-disabled'}>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/bosses'><li>Bosses</li></NavLink>
            {user ? <>

                <li>
                    Profile
                    </li>

                <a href='#'>
                    <li onClick={() => {
                        logout()
                        setUser('')
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