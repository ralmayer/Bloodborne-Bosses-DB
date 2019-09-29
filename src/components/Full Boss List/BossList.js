import React from 'react'
import BossCard from './BossCard'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'
import BossListTop from './BossListTop'

const BossList = () =>
    <div>
        <div id='bossListHeader'>
            <Nav />
        </div>
        <div id='bossList'>
            <BossListTop />
            <div className='container'>
                <BossCard />
            </div>
        </div>
        <Footer />
    </div>


export default BossList