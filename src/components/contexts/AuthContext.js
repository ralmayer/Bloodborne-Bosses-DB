import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
		firebase.isInitialized().then(val => {
            setUser(val)
            console.log(val)
		})
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, email, setEmail, password, setPassword, name, setName, avatar, setAvatar }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;