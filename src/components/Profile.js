import React, { useState, useEffect, useContext, Fragment } from 'react'
import { AuthContext } from './contexts/AuthContext'
import Nav from './nav/Nav'
import firebase from './firebase'
import Footer from './Home/Footer'

const Profile = () => {

    const { authStatus } = useContext(AuthContext)

    const [displayName, setDisplayName] = useState('')
    const [displayAvatar, setDisplayAvatar] = useState('')
    const [name, setName] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [edit, setEdit] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)
    const [cred, setCred] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        firebase.getCurrentUser() && firebase.isInitialized().then(val => {
            setCred(val)
            firebase.getData('users').doc(val.uid).get().then(doc => {
                const info = doc.data()
                setUserInfo(info)
                setDisplayAvatar(info.avatar)
                setDisplayName(info.name)
            })
        })
    }
        , [authStatus])

    return <Fragment>
        <Nav />
        {cred ?
            <div id='profile'>
                <div id='profileUI'>
                    <div className='avatar'>
                        <img src={displayAvatar ? displayAvatar : 'https://i.imgur.com/WlTzMuD.jpg'} alt='avatar' style={{ maxWidth: '150px' }} />
                    </div>

                    <div className='break'></div>

                    <h2>{displayName}</h2>

                    <div className='break'></div>

                    <button onClick={(e) => {
                        e.preventDefault()
                        setEdit(!edit)
                        console.log(edit)
                    }}>edit profile details</button>
                    <div className='break'></div>
                    {edit && <form onSubmit={(e) => {
                        e.preventDefault()
                        firebase.updateProfile(cred.uid, name ? name : displayName, avatar ? avatar : displayAvatar).then(() => {
                            setDisplayName(name ? name : displayName)
                            setDisplayAvatar(avatar ? avatar : displayAvatar)
                            setName(null)
                            setAvatar(null)
                            setUpdateStatus(true)
                            setEdit(false)
                        }).catch((error) => alert(error))
                        setEdit(false)
                        console.log('submitted!')
                    }}>
                        <input
                            type="text"
                            value={name}
                            name="name"
                            placeholder="type your display name"
                            onChange={e => { setName(e.target.value) }}
                        />
                        <br />
                        <input
                            type="text"
                            value={avatar}
                            name="avatar"
                            placeholder="paste the image URL"
                            onChange={e => { setAvatar(e.target.value) }}
                        />
                        <br />
                        <button>Submit</button>
                    </form>}
                </div>
            </div>

            :
            <h1>please log in</h1>}
        <Footer />
    </Fragment>
}

export default Profile