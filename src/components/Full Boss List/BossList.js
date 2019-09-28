import React from 'react'
import BossCard from './BossCard'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'

const BossList = () =>
    <div>
        <div id='bossListHeader'>
            <Nav />
        </div>
        <div id='bossList'>
            <div className='container'>
                <BossCard />
            </div>
        </div>
        <Footer />
    </div>


export default BossList