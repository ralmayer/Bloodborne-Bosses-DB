import React, { useEffect, useState, Fragment } from 'react'
import firebase from './firebase'

export const Comments = ({ pageName }) => {

    const [cred, setCred] = useState('')
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState(null)
    const [abc, setAbc] = useState(null)

    useEffect(() => {
        //    firebase.getData(pageName).onSnapshot(snapshot => setAllComments([...snapshot.docs.map(doc => doc.data())]))
        
        // firebase.getData(pageName).onSnapshot(snapshot => Promise.all(snapshot.docs.map(async (doc) => {

        //     let poster = await firebase.getData('users').doc(doc.data().posterID).get()
        //     let name =poster.data().name
        //     let avatar = poster.data().avatar
        //     let comment = doc.data().content

        //     return ({
        //         name: name,
        //         avatar: avatar,
        //         comment: comment
        //     })
        // })).then(res => setAllComments(res.map(item => item))))

        firebase.getData(pageName).onSnapshot(snapshot => {
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
            {allComments.map(item => <li>{item.comment}</li>)}
        </ul>
    </Fragment>
}