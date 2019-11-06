import React, { useState, useContext, Fragment } from 'react'
import firebase from '../firebase'
import Nav from '../nav/Nav'
import { AuthContext } from '../contexts/AuthContext'
import { withRouter } from 'react-router-dom'
import Footer from '../Home/Footer'

const Login = (props) => {

    const { authStatus, setAuthStatus } = useContext(AuthContext)

    const [user, setUser] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        try {
            await firebase.login(email, password)
            setAuthStatus(true)
            setUser(true)
            props.history.replace('/')

        } catch (error) { alert(error.message) }
    }
    
    return (
        <Fragment>
            <Nav />
            <div className='auth'>
                <div className='authUI'>
                    <form onSubmit={e => {
                            e.preventDefault()
                            login()
                            setEmail('')
                            setPassword('')
                        }}>
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
                        <button>Submit</button>
                    </form>
                    <div className='break'></div>
                    {user && <h1>{'Successfully logged in'}</h1>}
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default withRouter(Login)