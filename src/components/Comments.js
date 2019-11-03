import React, { useEffect, useState, Fragment } from 'react'
import firebase from './firebase'

export const Comments = ({ pageName }) => {

    const [cred, setCred] = useState('')
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState(null)

    useEffect(() => {

        firebase.getData(pageName).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            const commentPromises = snapshot.docs.map(async (doc) => {
                const {posterID, content: comment} = doc.data()
                const poster = await firebase.getData('users').doc(posterID).get()
                const {name, avatar} = poster.data()
        
                return {name, avatar, comment}

            })       
            Promise.all(commentPromises)
              .then(setAllComments)
          })
 
        firebase.isInitialized().then(val => setCred(val))
        
    }, [])

    return allComments && <Fragment>
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
            {allComments.map(item => <Fragment>
                <li>{item.name}</li>
                <li>{item.comment}</li>
                
            </Fragment>)}
        </ul>
    </Fragment>
}