import React, { useState, useContext, useEffect, Fragment } from 'react'
import Nav from './nav/Nav'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthContext'

export const Profile = ({ match: { params: { id } } }) => {

    const [user, setUser] = useState('')
    const [name, setName] = useState(user.name && user.name)
    const [avatar, setAvatar] = useState(user.avatar && user.avatar)
    const [edit, setEdit] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)

 
    useEffect(() => {
        firebase.getData('users').doc('WkzSjAJMVwhAE4Jr43b8QSUsLef2').get().then(doc =>  {
            setUser(doc.data())
        setName(doc.data().name)
        setAvatar(doc.data().avatar)
        })
    }
    , [])


    return user ? <Fragment>
        <Nav />
        
        <img src={user.avatar ? user.avatar : 'https://i.imgur.com/WlTzMuD.jpg'} alt='avatar' style={{maxWidth: '150px'}}/>

        <br />

        <h1>{user.name}</h1>

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
        </form> }

    </Fragment> : <h1>please log in</h1>
}
