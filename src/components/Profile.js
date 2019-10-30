import React, { useState, useEffect, Fragment } from 'react'
import Nav from './nav/Nav'
import firebase from './firebase'


export const Profile = ({cred}) => {

    // const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [edit, setEdit] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)


    useEffect(() => 
        firebase.getData('users').doc(cred.uid).get().then(doc => {
            setName(doc.data().name)
            setAvatar(doc.data().avatar)
            console.log(cred)
        })
        , [])

    // useEffect(() => console.log(cred))


    return <Fragment>
        <Nav /> {firebase.getCurrentUser() ? <Fragment>

            <img src={cred.avatar ? cred.avatar : 'https://i.imgur.com/WlTzMuD.jpg'} alt='avatar' style={{ maxWidth: '150px' }} />

            <br />

            <h1>{name}</h1>

            <br />

            <button onClick={(e) => {
                e.preventDefault()
                setEdit(!edit)
                console.log(edit)
            }}>edit profile details</button>
            {edit && <form>
                <input
                    type="text"
                    value={name}
                    name="name"
                    placeholder="type your display name"
                    onChange={e => { setName(e.target.value) }}
                    required
                />
                <br />
                <input
                    type="text"
                    value={avatar}
                    name="avatar"
                    placeholder="paste the image URL"
                    onChange={e => { setAvatar(e.target.value) }}
                    required
                />
                <br />
                <button onClick={(e) => {
                    e.preventDefault()
                    firebase.updateProfile(name, avatar).then(() => {
                        setUpdateStatus(true)
                        setEdit(false)
                    }).catch((error) => alert(error))
                    setEdit(false)
                    console.log('submitted!')
                }}>Submit</button>
                {updateStatus && <h1>successfully updated!</h1>}
            </form>}

        </Fragment> : <h1>please log in</h1>}
    </Fragment>
}
