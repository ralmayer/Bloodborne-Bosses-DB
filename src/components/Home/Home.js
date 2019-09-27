import React, { Fragment, useContext } from 'react'
import { BossesContext } from '../contexts/BossesContext'
import Banner from './Banner'
import BossesPreview from '../Bosses Preview/BossesPreview'
import Footer from './Footer';
import CTA from './CTA'

const Home = () => {
    const { bossesList } = useContext(BossesContext)

    return (
        <Fragment>
            {bossesList ?
                <Fragment>
                    <Banner />
                    <BossesPreview />
                    <CTA />
                    <Footer />
                </Fragment>
                : null}
        </Fragment>
    )
}

export default Home