import React, { useEffect, useState, useContext, Fragment } from 'react'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthContext'

export const Comments = ({pageName}) => {

    const { user } = useContext(AuthContext)

    const[comment, setComment] = useState('')
    const[allComments, setAllComments] = useState([])

    useEffect(() => {
       firebase.getData(pageName).onSnapshot(snapshot => setAllComments([...snapshot.docs.map(doc => doc.data().content)]))
    }, [])
    

    return <Fragment>
        {firebase.getCurrentUser() && <form onSubmit={(e) => {
        e.preventDefault()
        firebase.addComment(pageName, user.uid, comment).then(console.log('comment sent!')).then(setComment(''))
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
    <ul>
    {allComments && allComments.map(comment => <li>{comment}</li>)}
    </ul>
    </Fragment>
}