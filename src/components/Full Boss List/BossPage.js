import React, { Fragment, useState, useEffect } from 'react'
import { BossesContext } from '../contexts/BossesContext'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'

const BossPage = ({match: {params: {id}}}) => {
    
    const [boss, setBoss] = useState({})

    const fetchData = async () => {
        const res = await fetch('https://api.myjson.com/bins/evpjj')
        const data = await res.json()
        const { name, location, drops, weakness, lore, avatar } = data.bosses.filter(obj => obj.id === id)[0]
        setBoss({name, location, drops, weakness, lore, avatar})
    }

    useEffect(() => {
        fetchData()
        
    }, [])

    return (      
        <Fragment>
            <div id='bossPage'>
            <Nav />
                {boss ? <div id="bossSection">
                    {boss.name}
                </div> : null}
            </div>
            <Footer />
        </Fragment>
    )
}

export default BossPage