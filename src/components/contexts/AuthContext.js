// import React, { createContext, useState, useEffect } from 'react'
// import firebase from '../firebase'
// import App from '../../App'

// export const AuthContext = createContext()

// const AuthContextProvider = (props) => {

//     const [cred, setCred] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     useEffect(() => {
//         firebase.isInitialized().then(val => setCred(val))
//     })
 

//     return (
//         <AuthContext.Provider value={{ cred, setCred, email, setEmail, password, setPassword}}>
//             {/* <App /> */}
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContextProvider;