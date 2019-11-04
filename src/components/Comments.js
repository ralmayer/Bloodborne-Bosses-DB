import React, { useEffect, useState, Fragment } from 'react'
import firebase from './firebase'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: 'rgb(223, 199, 149)',
            main: 'rgb(223, 199, 149)',
            dark: 'rgb(223, 199, 149)'
        },
        secondary: {
            light: 'rgb(223, 199, 149)',
            main: 'rgb(223, 199, 149)',
            dark: 'rgb(223, 199, 149)',
        },
        error: {
            main: 'rgb(182, 0, 0)',
            //   main: ,
            //   dark: ,
        },
    }
})

export const Comments = ({ pageName }) => {

    const [cred, setCred] = useState('')
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState(null)

    useEffect(() => {

        firebase.getData(pageName).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            const commentPromises = snapshot.docs.map(async (doc) => {
                const { posterID, content: comment } = doc.data()
                const poster = await firebase.getData('users').doc(posterID).get()
                const { name, avatar } = poster.data()

                return { name, avatar, comment }

            })
            Promise.all(commentPromises)
                .then(setAllComments)
        })

        firebase.isInitialized().then(val => setCred(val))

    }, [])

    return allComments && <div className='comments'>
        {cred && <><form onSubmit={(e) => {
            e.preventDefault()
            comment && firebase.addComment(pageName, cred.uid, comment).then(console.log('comment sent!')).then(setComment(''))
        }}>
            <ThemeProvider theme={theme}>
                <TextField
                    id="standard-textarea"
                    label="作成者を称賛する"
                    placeholder="250シンボル以下"
                    multiline
                    margin="normal"
                    value={comment}
                    onChange={e => { setComment(e.target.value) }}
                    rowsMax='4'
                    style={{ width: '300px' }}
                    color="secondary"
                />
            </ThemeProvider>

            <br />
            <button >Post</button>
        </form>
    <div className='break'></div>
    </>}
        <ul>
            {allComments.map(item => <div className='comment'>
                <div className='user-info'>
                    <div className='display-name'>{item.name}</div>
                    <div className='break'></div>
                    <div className='avatar'><img src={item.avatar} alt='avatar' /></div>
                </div>
                <div className='comment-text'><p>{item.comment}</p></div>
            </div>)}
        </ul>
    </div>
}