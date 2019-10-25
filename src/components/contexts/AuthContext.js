import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('llev4n@gmail.com')
    const [password, setPassword] = useState('CarpenterBr00t')


    useEffect(() => {
		firebase.isInitialized().then(val => {
            setUser(val)
		})
    }, [])

 

    return (
        <AuthContext.Provider value={{ user, setUser, email, setEmail, password, setPassword}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;