import React, { useEffect, useState, Fragment } from 'react'
import firebase from './firebase'

export const Comments = ({pageName}) => {

    const[cred, setCred] = useState('')
    const[comment, setComment] = useState('')
    const[allComments, setAllComments] = useState([])

    useEffect(() => {
       firebase.getData(pageName).onSnapshot(snapshot => setAllComments([...snapshot.docs.map(doc => doc.data().content)]))
       firebase.isInitialized().then(val => setCred(val))
    }, [])
    

    return <Fragment>
        {cred && <form onSubmit={(e) => {
        e.preventDefault()
        firebase.addComment(pageName, cred.uid, comment).then(console.log('comment sent!')).then(setComment(''))
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