import React, { useContext, Fragment } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../contexts/AuthContext'
import Nav from '../nav/Nav'

const Login = () => {

    const { user, setUser, email, setEmail, password, setPassword } = useContext(AuthContext)

    async function login() {
        try {
            await firebase.login(email, password).then(res => setUser(res.user))

        } catch (error) { alert(error.message) }
    }

    async function logout() {
        await firebase.logout()
    }

    return (
        <Fragment>
            <Nav />
            <form>
                <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="email"
                    onChange={e => { setEmail(e.target.value) }}
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <br />
                <button onClick={e => {
                    e.preventDefault()
                    login()
                    setEmail('')
                    setPassword('')
                }}>Submit</button>
                <br />
                <button onClick={e => {
                    e.preventDefault()
                    logout().then(setUser(''))
                }}>Sign Out</button>
            </form>
            <br />
            <div>{user ? `Welcome, ${user.displayName}` : 'not logged in'}</div>
        </Fragment>
    )
}

export default Login