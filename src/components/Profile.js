import React, { useState, useEffect, Fragment } from 'react'
import Nav from './nav/Nav'
import firebase from './firebase'

// const Profile = () => <Fragment>
//     <Nav />
//     <h1>profile component</h1>
// </Fragment>

// export default Profile


const Profile = ({ cred, userInfo }) => {

    const [displayName, setDisplayName] = useState(userInfo.name)
    const [displayAvatar, setDisplayAvatar] = useState(userInfo.avatar)
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [edit, setEdit] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)

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