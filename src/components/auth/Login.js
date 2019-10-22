import React, { useContext } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {

    const { email, setEmail, password, setPassword } = useContext(AuthContext)

    async function login() {
        try {
             await firebase.login(email, password)
        } catch(error) { alert(error.message) }
    }

    return (
        <form>
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
            <button onClick={login}>Submit</button>
        </form>
        )
}

export default Login