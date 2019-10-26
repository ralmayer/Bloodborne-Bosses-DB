import React, { useState, useContext, Fragment } from 'react'
import Nav from './nav/Nav'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthContext'

export const Profile = ({ match: { params: { id } } }) => {

    const { user } = useContext(AuthContext)

    const [name, setName] = useState(user ? user.displayName : '')
    const [avatar, setAvatar] = useState(user ? user.avatarURL : '')
    const [edit, setEdit] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)




    return firebase.getCurrentUser() ? <Fragment>
        <Nav />
        <img src={firebase.getCurrentUser().photoURL} alt='profile' /> 
        {console.log(firebase.getCurrentUser())}
        <h1>{user.displayName}</h1>
        {/* <h1>{id}</h1> */}
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

    </Fragment> : 'please log in'
}
