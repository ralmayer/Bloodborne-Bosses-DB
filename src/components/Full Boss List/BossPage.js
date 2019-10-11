import React, { Fragment, useState, useEffect } from 'react'
import Nav from '../nav/Nav'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'

const BossPage = ({ match: { params: { id } } }) => {

    const [boss, setBoss] = useState({})

    const fetchData = async () => {
        const res = await fetch('https://api.myjson.com/bins/1fuemv')
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
                        <div id="bossSection" style={{ backgroundImage: `url(${boss.avatar})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <ul>
                                <li></li>
                                <li></li>
                                <li id="bossInfo">
                                    <div id="bossName"><p>{boss.name}</p></div>
                                </li>
                            </ul>
                        </div>
                        <div id='stats'>
                            <div className='stat-title'>Location: </div>
                            <div>{boss.location}</div>
                            <div className='stat-title'>Drops:</div>
                            <div>{boss.drops}</div>
                            <div className='stat-title'>Weakness:</div>
                            <div>{boss.weakness}</div>
                        </div>
                        <div id='lore'>
                            <div><p>Lore</p></div>
                            <div className='break'></div>
                            <div>{boss.lore}</div>
                            <div style={{marginTop: '50px'}}>
                                <Link to='/bosses'>
                                    <img src='https://media1.giphy.com/media/pLCy6fPZG73wI/source.gif' alt='mark' style={{ width: '200px' }} />
                                </Link>
                            </div>
                        </div>
                    </Fragment>
                    : null}
            </div>
            <Footer />
        </Fragment>
    )
}

export default BossPage