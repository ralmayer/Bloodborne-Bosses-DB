import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BossesContextProvider from './components/contexts/BossesContext'
import firebase from './components/firebase'
import './App.scss';
import Home from './components/Home/Home';
import BossList from './components/Full Boss List/BossList';
import BossPage from './components/Full Boss List/BossPage';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/Profile';
import Shouts from './components/Shouts';
import { userInfo } from 'os';


const App = () => {

    const [cred, setCred] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(async () => {
        await firebase.isInitialized().then(val => {
            setCred(val)
            firebase.getData('users').doc(val.uid).get().then(doc => setUserInfo(doc.data()))})
    }, [])

    return cred && userInfo && (
        <div>
            <BossesContextProvider>
                <BrowserRouter>
                    <Fragment>
                        <Route path="/" component={Home} exact />
                        <Route path="/profile" component={() => <Profile cred={cred} userInfo={userInfo}/>} />
                        <Route path="/bosses" component={BossList} exact/>
                        <Route path="/bosses/:id" component={BossPage} />
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/credits" component={Shouts}/>
                    </Fragment>
                </BrowserRouter>
            </BossesContextProvider>
        </div>
    )

}

export default App