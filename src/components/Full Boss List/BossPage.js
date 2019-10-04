import React, { Fragment, useContext } from 'react'
import { BossesContext } from '../contexts/BossesContext'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'

const BossPage = ({match: {params: {id}}}) => {
    
    const { bossesList } = useContext(BossesContext)

    // reminder: replase context import with a standalone API call to avoid the
    // "cannot read property 'bosses' of null" issue on BossPage reloads 

    const { name, location, drops, weakness, lore, avatar } = bossesList.bosses.filter(obj => obj.id === id)[0]

    return (
        
        <Fragment>
            <div id='bossPage'>
            <Nav />
                {bossesList ? <div id="bossSection">
                    <ul>
                        <li></li>
                    </ul>
                </div> : null}
            </div>
            <Footer />
        </Fragment>
    )
}

export default BossPage