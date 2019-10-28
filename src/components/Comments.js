import React, { useEffect, useState, useContext, Fragment } from 'react'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthContext'

export const Comments = () => {

    const { user } = useContext(AuthContext)

    const[comment, setComment] = useState('')
    const[allComments, setAllComments] = useState([])

    useEffect(() => {firebase.getData()}, [])
    // .then(res => setAllComments([...res])).then(console.log(allComments))

    return <Fragment>
        {firebase.getCurrentUser() && <form onSubmit={(e) => {
        e.preventDefault()
        firebase.addComment('shouts', user.uid, comment).then(console.log('comment sent!')).then(setComment(''))
    }}>
        <input
            type="text"
            value={comment}
            name="text"
            placeholder="comment..."
            onChange={e => { setComment(e.target.value) }}
            required
        />
        <br />
        <button >Post</button>
    </form>}
    </Fragment>
}