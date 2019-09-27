import React, { Fragment } from 'react'
import Banner from './Banner'
import BossesPreview from '../Bosses Preview/BossesPreview'
import Footer from './Footer';
import CTA from './CTA'

const Home = () => 
    <Fragment>
        <Banner />
        {/* <BossesPreview /> */}
        <CTA />
        <Footer />
    </Fragment>


export default Home