import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BossesContextProvider from './components/contexts/BossesContext'
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About';
import BossList from './components/Full Boss List/BossList';
import BossPage from './components/Full Boss List/BossPage';

function App() {
    return (
        <div>
            <BossesContextProvider>
                <BrowserRouter>
                    <Fragment>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/bosses" component={BossList} exact/>
                        <Route path="/bosses/:id" component={BossPage} />
                    </Fragment>
                </BrowserRouter>
            </BossesContextProvider>
        </div>
    )

}

export default App