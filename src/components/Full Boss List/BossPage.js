import React, { Fragment, useState, useEffect } from 'react'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'

const BossPage = ({ match: { params: { id } } }) => {

    const [boss, setBoss] = useState({})

    const fetchData = async () => {
        const res = await fetch('https://api.myjson.com/bins/evpjj')
        const data = await res.json()
        const { name, location, drops, weakness, lore, avatar } = data.bosses.filter(obj => obj.id === id)[0]
        setBoss({ name, location, drops, weakness, lore, avatar })
    }

    useEffect(() => {
        fetchData()

    }, [])

    return (
        <Fragment>
            <div id='bossPage'>
                <Nav />
                {boss ?
                    <Fragment>
                        <div id="bossSection" style={{ backgroundImage: `url(${boss.avatar})`, backgroundPosition: '-500px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <ul>
                                <li></li>
                                <li></li>
                                <li id="bossInfo">
                                    <div id="bossName"><p>{boss.name}</p></div>
                                </li>
                            </ul>
                        </div>
                        <div id='stats'>
                            <div>Location: </div>
                            <div>{boss.location}</div>
                            <div>Drops:</div>
                            <div>{boss.drops}</div>
                            <div>Weakness:</div>
                            <div>{boss.weakness}</div>
                        </div>
                    </Fragment>
                    : null}
            </div>
            <Footer />
        </Fragment>
    )
}

export default BossPage