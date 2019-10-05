import React, { Fragment, useContext } from 'react'
import { BossesContext } from '../contexts/BossesContext'
import NestedMoreButton from './NestedMoreButton'
import { Link } from 'react-router-dom'

const BossesPreviewCard = () => {

    const { bossesList } = useContext(BossesContext)

    return (
            <div className='boss-preview-cards'>
                {bossesList.bosses.slice(0, 3).map((boss, index) =>
                    <Fragment>
                        <div className='boss-preview-avatar' id={`bossPreviewAvatar${index}`}><img src={boss.avatar} alt={boss.id} /></div>
                        <div className='boss-preview-title' id={`bossPreviewTitle${index}`}><Link to={`/bosses/${boss.id}`}>{boss.name}</Link></div>
                        <div className='boss-preview-text' id={`bossPreviewText${index}`}><div className='boss-preview-title-nested'><Link to={`/bosses/${boss.id}`}>{boss.name}</Link></div><br />{`${boss.lore.substring(0, 300)}...`}<NestedMoreButton path={boss.id}/></div>
                    </Fragment>
                )}
            </div>

    )
}

export default BossesPreviewCard