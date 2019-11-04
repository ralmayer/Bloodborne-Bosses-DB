import React, { useState, useEffect, Fragment } from 'react'
import Nav from './nav/Nav'
import firebase from './firebase'

const Profile = () => {

    const [displayName, setDisplayName] = useState('')
    const [displayAvatar, setDisplayAvatar] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
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
            })})     
    }
    , [])

    return <Fragment>
        <Nav />
        {cred ?
            <Fragment>

                <img src={displayAvatar ? userInfo.avatar : 'https://i.imgur.com/WlTzMuD.jpg'} alt='avatar' style={{ maxWidth: '150px' }} />

                <br />

                <h1>{displayName}</h1>

                <br />

                <button onClick={(e) => {
                    e.preventDefault()
                    setEdit(!edit)
                    console.log(edit)
                }}>edit profile details</button>
                {edit && <form onSubmit={(e) => {
                    e.preventDefault()
                    firebase.updateProfile(cred.uid, name ? name : displayName, avatar ? avatar : displayAvatar).then(() => {
                        setDisplayName(name)
                        // setDisplayAvatar(avatar)
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
                    {updateStatus && <h1>successfully updated!</h1>}
                </form>}
            </Fragment>

                : <h1>please log in</h1>}
    </Fragment>
}

export default Profile