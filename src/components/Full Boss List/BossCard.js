import React, { useContext, Fragment } from 'react'
import { BossesContext } from '../contexts/BossesContext'

const BossCard = () => {

    const { bossesList } = useContext(BossesContext)

    return (
        <Fragment>
            { bossesList ? bossesList.bosses.map((boss, index) => 
            <div className='boss-card' key={boss.id}>
                <div className='boss-card-avatar' id={boss.id}>
                    <img src={boss.avatar} alt={boss.id}/>
                    <div className='avatar-menu'>
                       <div id='avatarMenuTitle'>
                       <p>{boss.name}</p>
                       </div>
                       <div className='break'></div>
                        <a href='#'>
                            <div>
                                learn more
                            </div>
                        </a>
                    </div>
                </div>
                <div className='boss-card-description-box'></div>
            </div>
        ) : null}
        </Fragment>
    )
}


export default BossCard