import React, { useState, useContext, Fragment } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../contexts/AuthContext'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'

const Register = (props) => {

    const { authStatus, setAuthStatus } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function register() {
        firebase.register(name, email, password)
        setAuthStatus(true)
    }

    function logout() {
        firebase.logout()
    }

    return (
        <Fragment>
            <Nav />
            <div className='auth'>
                <div className='authUI'>
                    <form onSubmit={e => {
                        e.preventDefault()
                        register()
                        setName('')
                        setEmail('')
                        setPassword('')
                    }}>
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
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Register