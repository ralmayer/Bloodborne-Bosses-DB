import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [user, setUser] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <AuthContext.Provider value={{ user, setUser, email, setEmail, name, setName, password, setPassword }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;