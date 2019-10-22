import React, { useContext } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../contexts/AuthContext'

const Register = (props) => {
    const { name, setName, email, setEmail, password, setPassword } = useContext(AuthContext)

    async function onRegister() {
        try {
            await firebase.register(name, email, password)

            props.history.replace('/')
        } catch(error) { alert(error.message) }
    }

    return (

        <form>
            <input
                type="text"
                value={name}
                name="display name"
                placeholder="display name"
                onChange={e => setName(e.target.value)}
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
            <button onClick={onRegister}>Submit</button>
        </form>
    )
}

export default Register