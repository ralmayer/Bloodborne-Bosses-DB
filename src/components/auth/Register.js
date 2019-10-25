import React, { useContext, Fragment } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../contexts/AuthContext'
import Nav from '../nav/Nav'

const Register = (props) => {
    const { name, setName, email, setEmail, password, setPassword } = useContext(AuthContext)

    async function onRegister() {
        try {
            await firebase.register(name, email, password)
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
                type="text"
                value={name}
                name="display name"
                placeholder="display name"
                onChange={e => { setName(e.target.value) }}
            />
            <br />
            <input
                type="text"
                value={email}
                name="email"
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={password}
                name="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button onClick={e => {
                e.preventDefault()
                onRegister()
                setName('')
                setEmail('')
                setPassword('')
            }}>Submit</button>
            <br />
            <button onClick={e => {
                e.preventDefault()
                logout()
            }}>Sign Out</button>
        </form>
        </Fragment>
    )
}

export default Register