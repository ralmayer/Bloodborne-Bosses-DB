import React, { useContext, Fragment } from 'react'
import { BossesContext } from '../contexts/BossesContext'
import { Link } from 'react-router-dom'

const BossCard = (props) => {

    const { bossesList } = useContext(BossesContext)

    return (
        <Fragment>
            {bossesList ? bossesList.bosses.map((boss, index) =>
                <div className='boss-card' key={boss.id}>
                    <div className='boss-card-avatar' id={boss.id}>
                        <img src={boss.avatar} alt={boss.id} />
                        <div className='avatar-menu'>
                            <div id='avatarMenuTitle'>
                                <p>{boss.name}</p>
                            </div>
                            <div className='break'></div>
                            <Link to={`/bosses/${boss.id}`}>
                                <div>
                                    learn more
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='boss-card-description-box'></div>
                </div>
            ) : null}
        </Fragment>
    )
}


export default BossCard