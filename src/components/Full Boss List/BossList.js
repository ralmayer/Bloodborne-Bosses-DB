import React from 'react'
import BossCard from './BossCard'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'
import BossListTop from './BossListTop'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const BossList = (props) =>
    // console.log(props) ||

        <div>
            <div id='bossListHeader'>
                <Nav />
            </div>
            <div id='bossList'>
                <BossListTop />
                <div className='container'>
                    <BossCard />
                    {/* <Route path="/bosses/cleric-beast" render={() => <h1>Hello World!</h1>} /> */}
                </div>
            </div>
            <Footer />
        </div>



export default BossList